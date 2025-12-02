import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

type DrawerProps = {
  open: boolean;
  toggleDrawer?: (open: boolean) => void;
};

export default function SettingsDrawer({ open, toggleDrawer }: DrawerProps) {
  return (
    <Drawer open={open} onOpenChange={toggleDrawer} direction="right">
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Customise Tanstack Values</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
