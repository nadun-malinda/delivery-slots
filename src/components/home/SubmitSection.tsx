import { useRouter } from "next/router";
import { useFormData } from "@/hooks/useFormData";

const SubmitSection = () => {
  const { replace } = useRouter();
  const { hasAllData } = useFormData();

  const handleOnSubmit = () => {
    if (hasAllData) replace("/summary");
  };

  return (
    <div className="container absolute bottom-4 left-4 right-4 mt-5 flex h-11 w-[calc(100%-2rem)] justify-end">
      <button
        className={`rounded-full bg-primary px-4 py-2 text-sm text-white disabled:opacity-25 ${
          !hasAllData && "disabled"
        }`}
        disabled={!hasAllData}
        onClick={handleOnSubmit}
      >
        {`Move on >`}
      </button>
    </div>
  );
};

export default SubmitSection;
