import "./ProductListing.scss";
import { useCallback, useMemo, useState } from "react";
import Pagination from "../../components/Pagination";
import { useProducts } from "../../hooks/apis/Products/useProducts";
import type { Product } from "../../api/products";
import Card from "../../components/Card";
import CardSkeleton from "../../components/CardSkeleton";
import NoProducts from "../../components/NoProducts";
import Error from "@/components/Error";

export default function ProductListing() {
  const [page, setPage] = useState<number>(1);
  const limit = 10;

  const { data, isLoading, error, isFetching, refetch } = useProducts(
    page,
    limit
  );

  const products = data?.data ?? [];

  const totalPages = useMemo(() => {
    return data ? Math.ceil(data.total / limit) : 0;
  }, [data, limit]);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <div className="product_listing_container">
      <ul className="listing">
        {error ? (
          <Error refetch={refetch} />
        ) : isLoading || isFetching ? (
          <CardSkeleton />
        ) : products.length === 0 ? (
          <NoProducts />
        ) : (
          products.map((p: Product) => (
            <Card key={p.id} id={p.id} title={p.title} />
          ))
        )}
      </ul>

      <Pagination
        page={page}
        totalPages={totalPages}
        onChange={handlePageChange}
        disabled={isFetching || isLoading || !!error}
      />
    </div>
  );
}
