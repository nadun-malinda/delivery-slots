import { DeliveryDate } from "../../types/common";
import { useHttp } from "./useHttp";

export const useDates = () => {
  const {
    data: dates,
    isLoading: isDatesLoading,
    error: isDatesError
  } = useHttp<DeliveryDate[]>("/dates");

  return {
    dates,
    isDatesLoading,
    isDatesError
  };
};
