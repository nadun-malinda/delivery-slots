import { some } from "lodash";
import { KEY_SELECTED_DATE } from "@/constants";
import type { DeliveryDate } from "../../types/common";

/**
 * Sets an item in the localStorage.
 *
 * @param {string} key - The key to store the item under.
 * @param {*} value - The value to be stored.
 */
export const setItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }
};

/**
 * Retrieves an item from the localStorage.
 *
 * @param {string} key - The key of the item to retrieve.
 * @returns {*} The retrieved item value, or null if not found.
 */
export const getItem = (key: string): any => {
  if (typeof window !== "undefined") {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  }

  return null;
};

/**
 * Checks if the stored date is valid by comparing it with the provided dates.
 *
 * @param {DeliveryDate[] | null} dates - The array of available dates.
 * @returns {boolean} True if the stored date is valid, false otherwise.
 */
export const isStoredDateValid = (dates: DeliveryDate[] | null): boolean => {
  const persistedSelectedDate = getItem(KEY_SELECTED_DATE);
  return (
    persistedSelectedDate !== null &&
    some(dates, date => date.toString() === persistedSelectedDate.toString())
  );
};
