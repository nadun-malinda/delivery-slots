import {
  getDefaultDate,
  getFormattedDate,
  getToday,
  sortDates
} from "../dates";
import type { DeliveryDate } from "../../../types/common";

describe("getFormattedDate", () => {
  it("should format the date string", () => {
    const dateString: DeliveryDate = "2023-05-25";
    const formattedDate = getFormattedDate(dateString);

    expect(formattedDate).toEqual({
      dayOfWeek: "Thu",
      dayOfMonth: 25,
      month: "May"
    });
  });
});

describe("getToday", () => {
  it("should return the current day in the correct format", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const expectedDate = `${year}-${month}-${day}`;
    const currentdate = getToday();

    expect(currentdate).toBe(expectedDate);
  });
});

describe("getDefaultDate", () => {
  it("should return the current dateif it is exists in the array", () => {
    const today = getToday();
    const dates: DeliveryDate[] = [today, "2023-05-26", "2023-05-27"];
    const defaultDate = getDefaultDate(dates);

    expect(defaultDate).toBe(dates[0]);
  });

  it("should return null if the array of dates in empty", () => {
    const dates: DeliveryDate[] = [];
    const defaultDate = getDefaultDate(dates);
    expect(defaultDate).toBeNull();
  });
});

describe("sortDates", () => {
  it("should sort the array of dates in ascending order", () => {
    const unsortedDates: DeliveryDate[] = [
      "2023-05-26",
      "2023-05-24",
      "2023-05-25"
    ];
    const expectedSortedDates: DeliveryDate[] = [
      "2023-05-24",
      "2023-05-25",
      "2023-05-26"
    ];
    const sortedDates = sortDates(unsortedDates);

    expect(sortedDates).toEqual(expectedSortedDates);
  });
});
