import { useNavigate } from "react-router";
import "./Header.scss";

export default function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="header_container">
      <h1 className="header_title" onClick={goHome}>
        Tanstack Pagination
      </h1>
    </div>
  );
}
