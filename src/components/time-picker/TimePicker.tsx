import { SingleTime } from "./SingleTime";
import { Status } from "./Status";
import type { DeliveryTime } from "../../../types/common";

interface TimePickerProps {
  times: DeliveryTime[] | null;
  isLoading?: boolean;
  error?: string | null;
  selectedTime: DeliveryTime | null;
  onTimeSelect: (time: DeliveryTime) => void;
}

/**
 * Component for displaying a time picker.
 *
 * @param {TimePickerProps} props - The component props.
 * @returns The TimePicker component.
 */
const TimePicker = ({
  times,
  isLoading = false,
  error = null,
  selectedTime,
  onTimeSelect
}: TimePickerProps) => {
  if (isLoading) {
    return <Status message="Loading delivery times..." />;
  }

  if (error) {
    return <Status message={error} />;
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
