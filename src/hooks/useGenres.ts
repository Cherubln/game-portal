import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import Genre from "../types/Genre";
import { AxiosError, CanceledError } from "axios";
import FetchResponse from "../types/FetchResponse";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    async function fetchGenres() {
      try {
        const { data } = await apiClient.get<FetchResponse<Genre[]>>(
          "/genres",
          {
            signal: controller.signal,
          }
        );
        setGenres(data.results);
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      }
    }
    fetchGenres();
    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};
export default useGenres;
