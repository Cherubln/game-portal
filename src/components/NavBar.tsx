import { HStack, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Game Hub</Text>
    </HStack>
  );
};

export default NavBar;
