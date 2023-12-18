import { Box, HStack, Image, Text } from "@chakra-ui/react";
import ToggleTheme from "./ToggleTheme";
import SearchInput, { SearchProps } from "./SearchInput";
import cirlceWrapper from "../assets/logoWrapper.svg";

const NavBar = ({ onSearch }: SearchProps) => {
  return (
    <HStack>
      <Box
        position="relative"
        bgClip="text"
        bgGradient="linear(to-r, orange.700, orange.600, orange.400)"
        color={"transparent"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"2xl"}
          padding={3}
          whiteSpace={"nowrap"}
        >
          Game Hub
        </Text>
        <Image
          src={cirlceWrapper}
          alt="circle"
          boxSize={"100%"}
          position="absolute"
          left={0}
          top={0}
          height={"100%"}
        />
      </Box>
      <SearchInput onSearch={onSearch} />
      <ToggleTheme />
    </HStack>
  );
};

export default NavBar;
