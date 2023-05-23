import { DeliveryTime } from "../../../types/common";
import { TimePicker } from "../time-picker";

interface TimePickerSectionProps {
  times: DeliveryTime[] | null;
  isLoading?: boolean;
  selectedTime: DeliveryTime | null;
  onTimeSelect: (time: DeliveryTime) => void;
}

const TimePickerSection = ({
  isLoading,
  times,
  selectedTime,
  onTimeSelect
}: TimePickerSectionProps) => {
  return (
    <div className="container mx-auto mt-5 flex h-[calc(100%-200px)] justify-center overflow-y-auto">
      <TimePicker
        isLoading={isLoading}
        times={times}
        selectedTime={selectedTime}
        onTimeSelect={onTimeSelect}
      />
    </div>
  );
};

export default TimePickerSection;
