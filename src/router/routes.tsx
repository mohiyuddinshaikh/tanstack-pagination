import { useRoutes } from "react-router-dom";
import { routes } from "./Router";

const Router = () => {
  const element = useRoutes(routes);
  return element;
};

export default Router;
