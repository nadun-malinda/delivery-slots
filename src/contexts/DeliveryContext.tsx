import { createContext, useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { getItem } from "@/utils/storage";
import type { DeliveryDate, DeliveryTime } from "../../types/common";
import {
  KEY_SELECTED_DATE,
  KEY_SELECTED_TIME,
  KEY_IN_HOME_AVAILABLE
} from "@/constants";

interface DeliveryContextType {
  selectedDate: DeliveryDate | null;
  setSelectedDate: Dispatch<SetStateAction<DeliveryDate | null>>;
  selectedTime: DeliveryTime | null;
  setSelectedTime: Dispatch<SetStateAction<DeliveryTime | null>>;
  inHomeAvailable: boolean;
  setInHomeAvailable: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

interface DeliveryProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const DeliveryContext = createContext<DeliveryContextType>({
  selectedDate: null,
  setSelectedDate: () => {},
  selectedTime: null,
  setSelectedTime: () => {},
  inHomeAvailable: false,
  setInHomeAvailable: () => {},
  isLoading: true
});

export const DeliveryProvider = ({ children }: DeliveryProviderProps) => {
  const [selectedDate, setSelectedDate] = useState<DeliveryDate | null>(null);
  const [selectedTime, setSelectedTime] = useState<DeliveryTime | null>(null);
  const [inHomeAvailable, setInHomeAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedSelectedDate = getItem(KEY_SELECTED_DATE);
    const storedSelectedTime = getItem(KEY_SELECTED_TIME);
    const storedInHomeAvailable = getItem(KEY_IN_HOME_AVAILABLE);

    setSelectedDate(storedSelectedDate);
    setSelectedTime(storedSelectedTime);
    setInHomeAvailable(!!storedInHomeAvailable);
    setIsLoading(false);
  }, []);

  return (
    <DeliveryContext.Provider
      value={{
        selectedDate,
        selectedTime,
        setSelectedDate,
        setSelectedTime,
        inHomeAvailable,
        setInHomeAvailable,
        isLoading
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
};
