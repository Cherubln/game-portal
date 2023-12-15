import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import ErrorMessage from "./ErrorMessage";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      <ErrorMessage>{error}</ErrorMessage>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
