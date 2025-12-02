import { useState } from "react";

export const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return { open, toggleDrawer };
};
