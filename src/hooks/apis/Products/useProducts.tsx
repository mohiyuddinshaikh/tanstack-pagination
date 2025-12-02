import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  fetchProducts,
  type PaginatedResponse,
  type Product,
} from "../../../api/products";

export function useProducts(page: number, limit: number = 10) {
  const queryClient = useQueryClient();

  const query = useQuery<PaginatedResponse<Product>>({
    queryKey: ["products", page],
    queryFn: () => fetchProducts(page, limit),
    staleTime: 60 * 1000, // in ms - so 1 minute
    gcTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  });

  if (query.data?.total) {
    const totalPages = Math.ceil(query.data.total / limit);
    const nextPage = page + 1;

    if (nextPage <= totalPages) {
      queryClient.prefetchQuery({
        queryKey: ["products", nextPage],
        queryFn: () => fetchProducts(nextPage, limit),
        staleTime: 60 * 1000,
      });
    }
  }

  return query;
}
