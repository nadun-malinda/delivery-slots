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

export const useHttp = <T>(
  url: string,
  config?: AxiosRequestConfig
): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // console.log("CALLING HTTP : ", url);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response: AxiosResponse<T> = await axios.get(
          `${process.env.NEXT_PUBLIC_MATHEM_API}${url}`,
          config
        );
        setData(response.data);
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
