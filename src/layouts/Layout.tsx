import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import { useDrawer } from "@/hooks/common/useDrawer";
import SettingsDrawer from "@/components/Drawer";

export default function Layout() {
  const { toggleDrawer, open } = useDrawer();

  return (
    <div className="layout">
      <Header toggleDrawer={() => toggleDrawer(true)} />
      <Outlet />
      <SettingsDrawer open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}
