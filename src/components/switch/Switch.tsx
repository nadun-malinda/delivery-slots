import { useState } from "react";

interface SwitchProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

/**
 * Component for a re usable switch toggler.
 *
 * @param {SwitchProps} props - The switch component props.
 * @returns The switch component.
 */
const Switch = ({
  checked = false,
  onChange,
  label,
  disabled = false
}: SwitchProps) => {
  const [isOn, setIsOn] = useState(checked);

  /**
   * Handles the toggle action when the switch is toggled.
   */
  const handleToggle = () => {
    setIsOn(!isOn);
    onChange(!checked);
  };

  return (
    <div className="flex items-center">
      <button
        className={`${
          checked ? "bg-primary" : "bg-lightGray"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
        onClick={handleToggle}
        disabled={disabled}
      >
        <span
          className={`${
            checked ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </button>
      <span className="ml-2 text-base text-highlight">{label}</span>
    </div>
  );
};

export default Switch;
