import { useContext } from "react";

import { TimePicker } from "@/components/time-picker";
import { DeliveryContext } from "@/contexts/DeliveryContext";

import type { DeliveryTime } from "../../../types/common";

interface TimePickerSectionProps {
  times: DeliveryTime[] | null;
  isTimesLoading: boolean;
  timesError: string | null;
  onTimeSelect: (time: DeliveryTime) => void;
}

/**
 * Component for displaying a section with a time picker.
 *
 * @param {TimePickerSectionProps} props - The component props.
 * @returns The TimePickerSection component.
 */
const TimePickerSection = ({
  times,
  isTimesLoading,
  timesError,
  onTimeSelect
}: TimePickerSectionProps) => {
  const { selectedTime } = useContext(DeliveryContext);

  return (
    <div className="container mx-auto mt-5 flex h-[calc(100%-200px)] justify-center overflow-y-auto">
      <TimePicker
        isLoading={isTimesLoading}
        error={timesError}
        times={times}
        selectedTime={selectedTime}
        onTimeSelect={onTimeSelect}
      />
    </div>
  );
};

export default TimePickerSection;
