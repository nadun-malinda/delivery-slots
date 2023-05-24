import { sortBy } from "lodash";
import type { DeliveryDate } from "../../types/common";

/**
 * Formats the given date string into an object containing
 * the day of the week, day of the month, and month.
 *
 * @param {string} dateString - The date string to format.
 * @returns {object} An object containing the formatted date information.
 * @property {string} dayOfWeek - Day of the week in short format.
 * @property {string} dayOfMonth - Date of the month.
 * @property {string} month - Month of the year.
 */
export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });

  return { dayOfWeek, dayOfMonth, month };
};

/**
 * Gets the current date in the format "YYYY-MM-DD".
 *
 * @returns {string} The current date string.
 */
export const getToday = (): string => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/**
 * Returns the default date based on the given array of delivery dates.
 * The default date is the current date if it exists in the array,
 * otherwise the first date in the array.
 *
 * @param dates - The array of delivery dates.
 * @returns {DeliveryDate | null} The default delivery date.
 */
export const getDefaultDate = (
  dates: DeliveryDate[] | null
): DeliveryDate | null => {
  const today = getToday();
  const todayDelivery = dates?.find(date => date === today);
  return todayDelivery ?? dates?.[0] ?? null;
};

/**
 * Sorts the given array of delivery dates in ascending order.
 *
 * @param dates - The array of delivery dates to sort.
 * @returns {DeliveryDate[]} The sorted array of delivery dates.
 */
export const sortDates = (dates: DeliveryDate[]): DeliveryDate[] => {
  return sortBy(dates);
};
