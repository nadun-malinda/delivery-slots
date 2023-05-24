import type { DeliveryTime } from "../../../types/common";

interface TimeItemProps {
  time: DeliveryTime;
  isSelected: boolean;
  onSelect: (time: DeliveryTime) => void;
}

/**
 * Component for displaying a single delivery time item in the time picker.
 *
 * @param {TimeItemProps} props - The component props.
 * @returns The SingleTime component.
 */
export const SingleTime = ({ time, isSelected, onSelect }: TimeItemProps) => {
  return (
    <li key={time.deliveryTimeId}>
      <label
        htmlFor={time.deliveryTimeId}
        className={`flex cursor-pointer items-center space-x-2 rounded-lg border p-2 transition-colors duration-100 ${
          isSelected ? "border-success bg-lightGreen" : "border-lightGray"
        }`}
      >
        <input
          type="radio"
          id={time.deliveryTimeId}
          name="deliveryTime"
          className="hidden"
          checked={isSelected}
          onChange={() => onSelect(time)}
        />
        <span
          className={`h-4 w-4 rounded-full ${
            isSelected ? "bg-success" : "border-2 bg-transparent"
          }`}
        />
        <div className="flex w-full items-center justify-between">
          <span>
            {time.startTime} - {time.stopTime}
          </span>
          {time.inHomeAvailable && (
            <small className="font-extralight">
              In Home Delivery available
            </small>
          )}
        </div>
      </label>
    </li>
  );
};
