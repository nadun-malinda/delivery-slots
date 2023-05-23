import { getFormattedDate } from "@/utils/dates";
import type { DeliveryDate } from "../../../types/common";

interface DateCardProps {
  date: DeliveryDate;
  selected?: boolean;
  onClick: (date: DeliveryDate) => void;
}

export const DateCard = ({
  date,
  selected = false,
  onClick
}: DateCardProps) => {
  const { dayOfWeek, dayOfMonth, month } = getFormattedDate(date);

  const handleClick = () => {
    onClick(date);
  };

  return (
    <div
      className={`flex h-24 w-24 cursor-pointer flex-col items-center justify-between rounded-lg border-2 bg-lightGreen p-2 ${
        selected ? "border-success" : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <small>{dayOfWeek}</small>
      <h5 className="text-3xl font-bold">{dayOfMonth}</h5>
      <p className="uppercase">{month}</p>
    </div>
  );
};
