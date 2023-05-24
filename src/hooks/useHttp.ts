import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type ApiResponse<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

type ApiError = {
  message: string;
};

/**
 * Custom hook for making HTTP GET requests using axios.
 *
 * @template T - The expected response data type.
 * @param {string} url - The URL to fetch data from.
 * @param {AxiosRequestConfig} [config] - The optional axios request configuration.
 * @returns {ApiResponse<T>} An object containing the response data, loading state, and error message.
 * @property {T | null} data - The response data.
 * @property {boolean} isLoading - Flag indicating if the data is being loaded.
 * @property {string | null} error - The error message, if an error occurred during the request.
 */
export const useHttp = <T>(
  url: string,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response: AxiosResponse<T> = await axios.get(
          `${process.env.NEXT_PUBLIC_MATHEM_API}${url}`,
          config
        );

        setData(response.data);
        setError(null);
      } catch (error: any) {
        const apiError: ApiError = error.response?.data || {
          message: "Error occured while fetching data. Please try again!"
        };

        setError(apiError.message);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (url !== "") fetchData();
  }, [config, url]);

  return { data, isLoading, error };
};
