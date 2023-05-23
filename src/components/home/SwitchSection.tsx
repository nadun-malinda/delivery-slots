import Switch from "../switch/Switch";

interface SwitchSectionProps {
  inHomeAvailable: boolean;
  onInHomeDeliveryChange: (needInHomeDelivery: boolean) => void;
  isDatesLoading: boolean;
}

const SwitchSection = ({
  inHomeAvailable,
  onInHomeDeliveryChange,
  isDatesLoading
}: SwitchSectionProps) => {
  return (
    <div className="container rounded-lg border border-lightGray px-4 py-3">
      <Switch
        label="Show slots with In Home Delivery only"
        checked={inHomeAvailable}
        onChange={onInHomeDeliveryChange}
        disabled={isDatesLoading}
      />
    </div>
  );
};

export default SwitchSection;
