import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";
import FetchResponse from "../types/FetchResponse";

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    async function fetchData() {
      try {
        const { data } = await apiClient.get<FetchResponse<T[]>>(endpoint, {
          signal: controller.signal,
        });
        setData(data.results);
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
}
export default useData;
