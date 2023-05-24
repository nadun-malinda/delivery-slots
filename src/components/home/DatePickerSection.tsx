import { useContext } from "react";

import { DatePicker } from "@/components/date-picker";
import { DeliveryContext } from "@/contexts/DeliveryContext";

import type { DeliveryDate } from "../../../types/common";

interface DatePickerSectionProps {
  dates: DeliveryDate[] | null;
  onDateSelect: (date: DeliveryDate) => void;
}

/**
 * Component for displaying and selecting a delivery date using a date picker.
 *
 * @param {DatePickerSectionProps} props - The component props.
 * @returns The DatePickerSection component.
 */
const DatePickerSection = ({ dates, onDateSelect }: DatePickerSectionProps) => {
  const { selectedDate } = useContext(DeliveryContext);

  return (
    <DatePicker
      dates={dates}
      selectedDate={selectedDate}
      onDateSelect={onDateSelect}
    />
  );
};

export default DatePickerSection;
