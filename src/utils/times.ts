import { filter, sortBy } from "lodash";
import type { DeliveryTime } from "../../types/common";

/**
 * Sorts an array of delivery times in ascending order
 * based on their start time.
 *
 * @param {DeliveryTime[]} times - The array of delivery times to sort.
 * @returns {DeliveryTime[]} The sorted array of delivery times.
 */
export const sortTimes = (times: DeliveryTime[]) => {
  return sortBy(times, (time: DeliveryTime) => {
    const [hours, minutes] = time.startTime.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
  });
};

/**
 * Filters an array of delivery times based on the availability for in home delivery.
 * If inHomeAvailable is true, it returns only the times with in home delivery available,
 * otherwise it returns all times.
 *
 * @param {DeliveryTime[]} times - The array of delivery times to filter.
 * @param {boolean} inHomeAvailable - Flag indicating whether in home delivery is available.
 * @returns {DeliveryTime[]} The filtered array of delivery times.
 */
export const filterTimes = (
  times: DeliveryTime[],
  inHomeAvailable: boolean
) => {
  const sortedTimes = sortTimes(times);
  return inHomeAvailable
    ? filter(sortedTimes, { inHomeAvailable })
    : sortedTimes;
};
