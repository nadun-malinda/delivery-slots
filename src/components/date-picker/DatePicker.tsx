import { DateCard } from "./DateCard";
import type { DeliveryDate } from "../../../types/common";

interface DatePickerProps {
  dates: DeliveryDate[] | null;
  selectedDate: DeliveryDate | null;
  onDateSelect: (date: DeliveryDate) => void;
}

/**
 * The main component for a date picker with selectable date cards.
 *
 * @param {DatePickerProps} props - The component props.
 * @returns The DatePicker component.
 */
const DatePicker = ({ dates, onDateSelect, selectedDate }: DatePickerProps) => {
  const handleDatePick = (date: DeliveryDate) => {
    onDateSelect(date);
  };

  return (
    <div className="container mx-auto mt-5 flex overflow-x-auto pb-3">
      <ul className="flex gap-3">
        {dates?.map(date => (
          <li key={date}>
            <DateCard
              date={date}
              selected={selectedDate === date}
              onClick={handleDatePick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatePicker;
