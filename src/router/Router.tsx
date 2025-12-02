import { type RouteObject } from "react-router-dom";
import ProductListing from "@/pages/ProductListing";
import Homepage from "@/pages/Homepage";
import Layout from "@/layouts/Layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "products",
        element: <ProductListing />,
      },
    ],
  },
];
