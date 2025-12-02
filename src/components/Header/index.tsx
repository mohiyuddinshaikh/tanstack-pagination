import { useNavigate } from "react-router";
import "./Header.scss";
import { Menu } from "lucide-react";

interface HeaderProps {
  toggleDrawer: () => void;
}

export default function Header({ toggleDrawer }: HeaderProps) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="header_container">
      <h1 className="header_title" onClick={goHome}>
        Tanstack Pagination
      </h1>
      <Menu size={36} onClick={toggleDrawer} className="cursor-pointer" />
    </div>
  );
}
