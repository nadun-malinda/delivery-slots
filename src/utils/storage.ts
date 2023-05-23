import { some } from "lodash";
import { DeliveryDate } from "../../types/common";
import { KEY_SELECTED_DATE } from "@/constants";

export const setItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }
};

export const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  }

  return null;
};

export const isStoredDateValid = (
  dates: DeliveryDate[] | null,
  storedDate: DeliveryDate
) => {
  console.log(">>>> dates: ", dates);
  return some(dates, date => {
    console.log(">>>> date: ", date, " storedDate: ", storedDate);
    return date === storedDate;
  });
};
