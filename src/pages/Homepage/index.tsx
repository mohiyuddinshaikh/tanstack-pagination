import { Button } from "@/components/ui/button";
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
      <Button variant="secondary" onClick={viewProducts}>
        View Products
      </Button>
    </div>
  );
}
