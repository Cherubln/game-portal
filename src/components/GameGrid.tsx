import { Box, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import ErrorMessage from "./ErrorMessage";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import Genre from "../types/Genre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { error, data, isLoading } = useGames(selectedGenre);
  const skeletons = new Array(12).fill(0);
  return (
    <Box marginTop={4}>
      <ErrorMessage>{error}</ErrorMessage>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={4}>
        {isLoading &&
          skeletons.map((skeleton, id) => (
            <GameCardSkeleton key={skeleton + id} />
          ))}
        {data.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
