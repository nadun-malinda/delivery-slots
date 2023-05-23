interface SubmitSectionProps {
  canMoveOn: boolean;
  onSubmit: () => void;
}

const SubmitSection = ({ canMoveOn, onSubmit }: SubmitSectionProps) => {
  return (
    <div className="container mx-auto mt-5 flex h-11 justify-end">
      <button
        className={`rounded-full bg-primary px-4 py-2 text-sm text-white disabled:opacity-25 ${
          !canMoveOn && "disabled"
        }`}
        disabled={!canMoveOn}
        onClick={onSubmit}
      >
        {`Move on >`}
      </button>
    </div>
  );
};

export default SubmitSection;
