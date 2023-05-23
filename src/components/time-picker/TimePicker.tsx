import type { DeliveryTime } from "../../../types/common";
import { SingleTime } from "./SingleTime";
import { Status } from "./Status";

interface TimePickerProps {
  times: DeliveryTime[] | null;
  isLoading?: boolean;
  selectedTime: DeliveryTime | null;
  onTimeSelect: (time: DeliveryTime) => void;
}

const TimePicker = ({
  times,
  isLoading = false,
  selectedTime,
  onTimeSelect
}: TimePickerProps) => {
  if (isLoading) {
    return <Status message="Loading delivery times..." />;
  }

  if (!times || times?.length === 0) {
    return <Status message="No available time slots!" />;
  }

  return (
    <ul className="w-full space-y-1">
      {times?.map(time => (
        <SingleTime
          key={time.deliveryTimeId}
          time={time}
          isSelected={time.deliveryTimeId === selectedTime?.deliveryTimeId}
          onSelect={onTimeSelect}
        />
      ))}
    </ul>
  );
};

export default TimePicker;
