import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ToggleTheme from "./ToggleTheme";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <ToggleTheme />
    </HStack>
  );
};

export default NavBar;
