import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ToggleTheme from "./ToggleTheme";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ToggleTheme />
    </HStack>
  );
};

export default NavBar;
