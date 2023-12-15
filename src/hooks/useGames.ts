import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";
import Game from "../types/Game";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchGames = async () => {
      try {
        const { data } = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
      }
    };
    fetchGames();

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
