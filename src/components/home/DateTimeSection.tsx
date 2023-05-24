import { useContext, useEffect, useMemo } from "react";

import { useFetchDates } from "@/hooks/useFetchDates";
import { useFetchTimes } from "@/hooks/useFetchTimes";

import DatePickerSection from "./DatePickerSection";
import TimePickerSection from "./TimePickerSection";
import { Status } from "./Status";

import { DeliveryContext } from "@/contexts/DeliveryContext";

import { filterTimes } from "@/utils/times";
import { getDefaultDate } from "@/utils/dates";
import { isStoredDateValid, setItem } from "@/utils/storage";

import { KEY_SELECTED_DATE, KEY_SELECTED_TIME } from "@/constants";
import type { DeliveryDate, DeliveryTime } from "../../../types/common";

/**
 * Component for selecting delivery date and time.
 * Displays a date picker and time picker sections.
 *
 * @returns The DateTimeSection component.
 */
export const DateTimeSection = () => {
  const { setSelectedDate, setSelectedTime, inHomeAvailable } =
    useContext(DeliveryContext);

  // fetch dates and times
  const { dates, isDatesLoading, datesError } = useFetchDates();
  const { times, isTimesLoading, timesError } = useFetchTimes();

  /**
   * Selects a fallback default date if the stored date in the localStorage is not valid.
   * Updates the selectedDate and selectedTime in both global state and localStorage.
   */
  useEffect(() => {
    if (!dates || dates.length === 0) return;

    if (!isStoredDateValid(dates)) {
      const defaultDate = getDefaultDate(dates);

      setSelectedDate(defaultDate);
      setSelectedTime(null);

      setItem(KEY_SELECTED_DATE, defaultDate);
      setItem(KEY_SELECTED_TIME, null);
    }
  }, [dates, setSelectedDate, setSelectedTime]);

  /**
   * Filters the available times based on the inHomeAvailable toggle.
   */
  const filteredTimes = useMemo(() => {
    if (times) {
      return filterTimes(times, inHomeAvailable);
    }
    return null;
  }, [times, inHomeAvailable]);

  /**
   * Handles the selection of a delivery date.
   * Updates the selectedDate and selectedTime in global state and localStorage.
   *
   * @param {DeliveryDate} date - The selected delivery date.
   */
  const handleDateSelect = (date: DeliveryDate) => {
    setSelectedDate(date);
    setSelectedTime(null); // reset selectedTime when date changes

    setItem(KEY_SELECTED_DATE, date);
    setItem(KEY_SELECTED_TIME, null);
  };

  /**
   * Handles the selection of a delivery time.
   * Updates the selectedTime in global state and localStorage.
   *
   * @param {DeliveryTime} time - The selected delivery time.
   */
  const handleTimeSelect = (time: DeliveryTime) => {
    setSelectedTime(time);
    setItem(KEY_SELECTED_TIME, time);
  };

  if (isDatesLoading) return <Status message="Fetching delivery dates..." />;

  if (datesError || timesError)
    return (
      <Status message="Error occured while fetching data. Please try again!" />
    );

  return (
    <>
      <DatePickerSection dates={dates} onDateSelect={handleDateSelect} />
      <TimePickerSection
        times={filteredTimes}
        isTimesLoading={isTimesLoading}
        timesError={timesError}
        onTimeSelect={handleTimeSelect}
      />
    </>
  );
};
