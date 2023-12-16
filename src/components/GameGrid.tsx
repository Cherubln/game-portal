import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import ErrorMessage from "./ErrorMessage";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { error, data, isLoading } = useGames();
  const skeletons = new Array(12).fill(0);
  return (
    <>
      <ErrorMessage>{error}</ErrorMessage>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
