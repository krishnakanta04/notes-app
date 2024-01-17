import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function TopNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-semibold font-chillax text-3xl sm:hidden">nb</p>
        <p className="font-semibold font-chillax text-3xl hidden sm:block">
          notebox
        </p>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center justify-start w-[48px]">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
