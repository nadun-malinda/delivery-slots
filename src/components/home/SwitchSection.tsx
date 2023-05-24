import { useContext } from "react";
import { DeliveryContext } from "@/contexts/DeliveryContext";
import Switch from "@/components/switch/Switch";
import { setItem } from "@/utils/storage";
import { KEY_IN_HOME_AVAILABLE } from "@/constants";

/**
 * Component for the switch section that allows users
 * to toggle in home delivery option.
 *
 * @returns The switch section component.
 */
const SwitchSection = () => {
  const { setSelectedTime, inHomeAvailable, setInHomeAvailable } =
    useContext(DeliveryContext);

  /**
   * Handles the in home delivery toggle.
   *
   * @param {boolean} needInHomeDelivery - The value indicating whether in home delivery is needed.
   */
  const handleInHomeDelivery = (needInHomeDelivery: boolean) => {
    setInHomeAvailable(needInHomeDelivery);
    setSelectedTime(null);
    setItem(KEY_IN_HOME_AVAILABLE, needInHomeDelivery);
  };

  return (
    <div className="container rounded-lg border border-lightGray px-4 py-3">
      <Switch
        label="Show slots with In Home Delivery only"
        checked={inHomeAvailable}
        onChange={handleInHomeDelivery}
      />
    </div>
  );
};

export default SwitchSection;
