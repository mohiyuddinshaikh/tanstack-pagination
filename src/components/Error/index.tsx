import { useNavigate } from "react-router";
import "./Error.scss";

interface ErrorProps {
  refetch: () => void;
}

export default function Error({ refetch }: ErrorProps) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const tryAgain = () => {
    refetch();
  };

  return (
    <div className="error_message">
      <p>Failed to load products. Try again.</p>
      <button onClick={tryAgain}>Try Again</button>
      <button onClick={goHome}>Go Home</button>
    </div>
  );
}
