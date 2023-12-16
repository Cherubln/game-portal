import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import FetchResponse from "../types/FetchResponse";

function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const effectDeps = deps ? [...deps] : [];
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    async function fetchData() {
      try {
        const { data } = await apiClient.get<FetchResponse<T[]>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
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
  }, effectDeps);

  return { data, error, isLoading };
}
export default useData;
