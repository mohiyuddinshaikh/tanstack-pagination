import "./Homepage.scss";
import { useNavigate } from "react-router";

export default function Homepage() {
  const navigate = useNavigate();

  const viewProducts = () => {
    navigate("/products");
  };

  return (
    <div className="homepage">
      <h2>Tanstack Pagination Homepage</h2>
      <button onClick={viewProducts}>View Products</button>
    </div>
  );
}
