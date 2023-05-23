import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { DeliveryContext } from "@/contexts/DeliveryContext";
import { useFormData } from "@/hooks/useFormData";

const Summary = () => {
  const { replace } = useRouter();
  const { selectedDate, selectedTime, inHomeAvailable } =
    useContext(DeliveryContext);
  const { hasAllData } = useFormData();

  useEffect(() => {
    // redirect to the home if required data is missing.
    if (!hasAllData) replace("/", undefined, { shallow: true });
  }, [replace, hasAllData]);

  const handleGoBack = () => {
    replace("/");
  };

  return (
    <>
      <div className="container mx-auto h-[calc(100vh-188px)]">
        <h2 className="mb-6 text-2xl">Your summary</h2>

        <h5 className="font-semibold">In Home Delivery:</h5>
        <p className="mb-2">{inHomeAvailable ? "Yes" : "No"}</p>

        <h5 className="font-semibold">Delivery date:</h5>
        <p className="mb-2">{selectedDate}</p>

        <h5 className="font-semibold">Delivery time:</h5>
        <p>
          {selectedTime?.startTime} - {selectedTime?.stopTime}
        </p>
      </div>
      <div className="container mx-auto mt-5 flex h-11 justify-end">
        <button
          className="rounded-full bg-primary px-4 py-2 text-sm text-white"
          onClick={handleGoBack}
        >
          {`< Back`}
        </button>
      </div>
    </>
  );
};

export default Summary;
