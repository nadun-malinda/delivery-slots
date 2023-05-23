import { filter, sortBy } from "lodash";
import { DeliveryTime } from "../../types/common";

export const sortAndFilterTimes = (
  times: DeliveryTime[],
  inHomeAvailable: boolean
) => {
  const sortedTimes = sortBy(times, (time: DeliveryTime) => {
    const [hours, minutes] = time.startTime.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
  });

  return inHomeAvailable
    ? filter(sortedTimes, { inHomeAvailable })
    : sortedTimes;
};
