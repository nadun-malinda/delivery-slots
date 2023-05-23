import { DeliveryDate } from "../../types/common";

export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  return { dayOfWeek, dayOfMonth, month };
};

export const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getDefaultDate = (dates: DeliveryDate[] | null) => {
  const today = getToday();
  const todayDelivery = dates?.find(date => date === today);
  return todayDelivery ?? dates?.[0] ?? null;
};
