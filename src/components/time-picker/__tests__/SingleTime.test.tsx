import { fireEvent, render } from "@testing-library/react";
import { SingleTime } from "../SingleTime";
import type { DeliveryTime } from "../../../../types/common";

// Sample test data
const time: DeliveryTime = {
  deliveryTimeId: "c8a33d1b-dbdc-4e81-918c-90e23aabb832",
  deliveryDate: "2023-05-19",
  startTime: "13:00",
  stopTime: "15:00",
  inHomeAvailable: false
};
const isSelected: boolean = false;
const onSelect: (time: DeliveryTime) => void = jest.fn();

describe("SingleTime", () => {
  it("render single time item", () => {
    const { getByText, getByRole, getByLabelText } = render(
      <SingleTime time={time} isSelected={isSelected} onSelect={onSelect} />
    );

    expect(getByText("13:00 - 15:00")).toBeInTheDocument();
  });

  it("calls onSelect when the single item is clicked", () => {
    const { getByText } = render(
      <SingleTime time={time} isSelected={isSelected} onSelect={onSelect} />
    );

    const singleTime = getByText("13:00 - 15:00");
    fireEvent.click(singleTime);

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(time);
  });

  it("gets selected styles when isSelected is true", () => {
    const { container } = render(
      <SingleTime time={time} isSelected={true} onSelect={onSelect} />
    );

    const label = container.firstElementChild as HTMLElement;
    expect(label).toHaveClass("border-success bg-lightGreen");
  });

  it("gets green background when single item is clicked", () => {
    const { container } = render(
      <SingleTime time={time} isSelected={isSelected} onSelect={onSelect} />
    );

    const label = container.firstElementChild;
    expect(label).toHaveClass("border-lightGray");

    fireEvent.click(container);
  });
});
