import { useEffect, useContext, useMemo } from "react";
import { useRouter } from "next/router";

import DatePickerSection from "@/components/home/DatePickerSection";
import TimePickerSection from "@/components/home/TimePickerSection";
import SwitchSection from "@/components/home/SwitchSection";
import SubmitSection from "@/components/home/SubmitSection";

import { DeliveryContext } from "@/contexts/DeliveryContext";

import { getDefaultDate } from "@/utils/dates";
import { sortAndFilterTimes } from "@/utils/times";
import { getItem, isStoredDateValid, setItem } from "@/utils/storage";

import { DeliveryDate, DeliveryTime } from "../types/common";
import {
  KEY_SELECTED_DATE,
  KEY_SELECTED_TIME,
  KEY_IN_HOME_AVAILABLE
} from "@/constants";
import { useFormData } from "@/hooks/useFormData";
import { useTimes } from "@/hooks/useTimes";
import { useDates } from "@/hooks/useDates";

const HomePage = () => {
  // global state and setters from the context.
  const {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    inHomeAvailable,
    setInHomeAvailable
  } = useContext(DeliveryContext);

  // router object to handle routes.
  const { replace } = useRouter();

  // fetch dates from the API.
  const { dates, isDatesLoading, isDatesError } = useDates();

  // fetch times from the API.
  const { times, isTimesLoading, isTimesError } = useTimes();

  // assess the form status
  const { hasAllData } = useFormData();

  // sort and filter the times when times fetch and toggle the switch.
  const sortedAndFilteredTimes = useMemo(() => {
    if (times) {
      return sortAndFilterTimes(times, inHomeAvailable);
    }
    return null;
  }, [times, inHomeAvailable]);

  // set initial selected date as today if today is an available delivery date.
  // else set the first available date.
  // else set null as the selected date.
  useEffect(() => {
    const persistedSelectedDate = getItem(KEY_SELECTED_DATE);
    console.log("useEffect - dates: ", dates);
    if (persistedSelectedDate === null && dates && dates.length > 0) {
      console.log("not valid...");
      const defaultDate = getDefaultDate(dates);
      setSelectedDate(defaultDate);
      setItem(KEY_SELECTED_DATE, defaultDate);
    }
  }, [dates, setSelectedDate]);

  // set the state variable for inHomeDelivery based on the toggle switch.
  // also reset the previously selected time value.
  const handleInHomeDelivery = (needInHomeDelivery: boolean) => {
    setInHomeAvailable(needInHomeDelivery);
    setSelectedTime(null);
    setItem(KEY_IN_HOME_AVAILABLE, needInHomeDelivery);
  };

  // set user selected date.
  // also reset the previously selected time value.
  const handleDateSelect = (date: DeliveryDate) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setItem(KEY_SELECTED_DATE, date);
  };

  // set user selected time.
  const handleTimeSelect = (time: DeliveryTime) => {
    setSelectedTime(time);
    setItem(KEY_SELECTED_TIME, time);
  };

  // go to the summary page after submitting the page.
  const handleOnSubmit = () => {
    if (hasAllData) replace("/summary");
  };

  return (
    <>
      <div className="container mx-auto h-[calc(100vh-188px)]">
        <SwitchSection
          inHomeAvailable={inHomeAvailable}
          onInHomeDeliveryChange={handleInHomeDelivery}
          isDatesLoading={isDatesLoading}
        />

        {isDatesLoading ? (
          <div className="flex h-full items-center justify-center">
            Fetching delivery dates...
          </div>
        ) : isDatesError || isTimesError ? (
          <div className="flex h-full items-center justify-center">
            Error occured while fetching data. Please try again!
          </div>
        ) : (
          <>
            <DatePickerSection
              dates={dates}
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
            <TimePickerSection
              isLoading={isTimesLoading}
              times={sortedAndFilteredTimes}
              selectedTime={selectedTime}
              onTimeSelect={handleTimeSelect}
            />
          </>
        )}
      </div>

      <SubmitSection canMoveOn={hasAllData} onSubmit={handleOnSubmit} />
    </>
  );
};

export default HomePage;
