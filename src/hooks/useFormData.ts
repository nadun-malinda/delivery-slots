import { useMemo, useContext } from "react";
import { DeliveryContext } from "@/contexts/DeliveryContext";

export const useFormData = () => {
  const { selectedDate, selectedTime } = useContext(DeliveryContext);

  const hasAllData = useMemo(() => {
    return !!selectedDate && !!selectedTime;
  }, [selectedDate, selectedTime]);

  return { hasAllData };
};
