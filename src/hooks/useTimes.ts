import { useContext, useMemo } from "react";
import { DeliveryContext } from "@/contexts/DeliveryContext";
import { useHttp } from "./useHttp";
import { DeliveryTime } from "../../types/common";

export const useTimes = () => {
  const { selectedDate } = useContext(DeliveryContext);
  const url = useMemo(
    () => (selectedDate ? `/times/${selectedDate}` : ""),
    [selectedDate]
  );
  const {
    data: times,
    isLoading: isTimesLoading,
    error: isTimesError
  } = useHttp<DeliveryTime[]>(url);

  return { times, isTimesLoading, isTimesError };
};
