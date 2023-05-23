import { DatePicker } from "../date-picker";
import { DeliveryDate } from "../../../types/common";

interface DatePickerSectionProps {
  dates: DeliveryDate[] | null;
  selectedDate: DeliveryDate | null;
  onDateSelect: (date: DeliveryDate) => void;
}

const DatePickerSection = ({
  dates,
  selectedDate,
  onDateSelect
}: DatePickerSectionProps) => {
  return (
    <DatePicker
      dates={dates}
      selectedDate={selectedDate}
      onDateSelect={onDateSelect}
    />
  );
};

export default DatePickerSection;
