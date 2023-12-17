import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ToggleTheme from "./ToggleTheme";
import SearchInput, { SearchProps } from "./SearchInput";

const NavBar = ({ onSearch }: SearchProps) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ToggleTheme />
    </HStack>
  );
};

export default NavBar;
