export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
}

export async function fetchProducts(
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<Product>> {
  // throw new Error("Mock API fail");

  const skip = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );

  const json = await res.json();

  const transformedData: Product[] = json.products.map((p: any) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    thumbnail: p.thumbnail,
    price: p.price,
  }));

  return {
    data: transformedData,
    total: json.total,
  };
}
