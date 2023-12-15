import useGames from "../hooks/useGames";
import ErrorMessage from "./ErrorMessage";

const GameGrid = () => {
  const { error, games } = useGames();

  return (
    <>
      <ErrorMessage>{error}</ErrorMessage>
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </>
  );
};

export default GameGrid;
