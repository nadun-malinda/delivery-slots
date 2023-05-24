import { render, fireEvent } from "@testing-library/react";
import { DateCard } from "../DateCard";

// Sample test data
const date = "2023-05-24";
const selected = true;
const onClick = jest.fn();

describe("DateCard", () => {
  it("renders the date card correctly", () => {
    const { getByText } = render(
      <DateCard date={date} selected={selected} onClick={onClick} />
    );

    expect(getByText("24")).toBeInTheDocument();
    expect(getByText("May")).toBeInTheDocument();
  });

  it("calls onClick when the date card is clicked", () => {
    const { container } = render(
      <DateCard date={date} selected={selected} onClick={onClick} />
    );

    const dateCard = container.firstChild as HTMLElement;
    fireEvent.click(dateCard);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(date);
  });
});
