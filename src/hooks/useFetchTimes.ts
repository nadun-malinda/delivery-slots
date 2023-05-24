import { useContext, useMemo } from "react";
import { DeliveryContext } from "@/contexts/DeliveryContext";
import { useHttp } from "./useHttp";
import type { DeliveryTime } from "../../types/common";

/**
 * Custom hook for fetching delivery times based on the selected date.
 * Uses the useHttp hook to handle the HTTP request.
 *
 * @returns {object} An object containing the fetched times, loading state, and error message.
 * @property {DeliveryTime[] | null} times - The fetched delivery times.
 * @property {boolean} isTimesLoading - Flag indicating if the times are currently being loaded.
 * @property {string | null} timesError - The error message if an error occurred during fetching.
 */
export const useFetchTimes = () => {
  const { selectedDate } = useContext(DeliveryContext);

  // generate the URL based on the selected date
  const url = useMemo(
    () => (selectedDate ? `/times/${selectedDate}` : ""),
    [selectedDate]
  );
  const {
    data: times,
    isLoading: isTimesLoading,
    error: timesError
  } = useHttp<DeliveryTime[]>(url);

  return { times, isTimesLoading, timesError };
};
