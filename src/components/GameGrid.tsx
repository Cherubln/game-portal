import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import ErrorMessage from "./ErrorMessage";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const fetchGames = async () => {
    try {
      const { data } = await apiClient.get<FetchGamesResponse>("/xgames");
      setGames(data.results);
    } catch (error) {
      setError((error as AxiosError).message);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);
  return (
    <>
      <ErrorMessage>{error}</ErrorMessage>
      <ul>
        {games.map((game) => {
          return <li>{game.name}</li>;
        })}
      </ul>
    </>
  );
};

export default GameGrid;
