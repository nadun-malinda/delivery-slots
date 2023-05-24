import { useMemo, useContext } from "react";
import { DeliveryContext } from "@/contexts/DeliveryContext";

/**
 * Custom hook for checking if the user has selected date and time values.
 *
 * @returns {object} An object containing a flag indicating if both date and time are selected.
 * @property {boolean} hasAllData - Flag indicating if both date and time are selected.
 */
export const useFormData = () => {
  const { selectedDate, selectedTime } = useContext(DeliveryContext);

  // Check if both selectedDate and selectedTime have values
  const hasAllData = useMemo(() => {
    return !!selectedDate && !!selectedTime;
  }, [selectedDate, selectedTime]);

  return { hasAllData };
};
