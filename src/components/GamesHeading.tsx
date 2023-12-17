import { Heading } from "@chakra-ui/react";
import GameQuery from "../types/gameQuery";

interface Props {
  gameQuery: GameQuery;
}
const GamesHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
};

export default GamesHeading;
