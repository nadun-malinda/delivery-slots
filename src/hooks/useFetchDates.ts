import { useHttp } from "./useHttp";
import type { DeliveryDate } from "../../types/common";

/**
 * Custom hook for fetching delivery dates.
 * Uses the useHttp hook to handle the HTTP request.
 *
 * @returns {object} An object containing the fetched dates, loading state, and error message.
 * @property {DeliveryDate[] | null} dates - The fetched delivery dates.
 * @property {boolean} isDatesLoading - Flag indicating if the dates are currently being loaded.
 * @property {string | null} datesError - The error message if an error occurred during fetching.
 */
export const useFetchDates = () => {
  const {
    data: dates,
    isLoading: isDatesLoading,
    error: datesError
  } = useHttp<DeliveryDate[]>("/dates");

  return {
    dates,
    isDatesLoading,
    datesError
  };
};
