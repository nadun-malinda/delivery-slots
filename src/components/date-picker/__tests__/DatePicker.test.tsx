import { render, fireEvent, screen } from "@testing-library/react";
import { DatePicker } from "@/components/date-picker";

// Sample test data
const dates = ["2023-05-24", "2023-05-25", "2023-05-26"];
const selectedDate = "2023-05-25";
const onDateSelect = jest.fn();

describe("DatePicker", () => {
  it("renders the correct number of date cards", () => {
    render(
      <DatePicker
        dates={dates}
        selectedDate={selectedDate}
        onDateSelect={onDateSelect}
      />
    );

    const dateCards = screen.getAllByRole("listitem");
    expect(dateCards.length).toBe(dates.length);
  });

  it("calls onDateSelect when a date card is clicked", () => {
    render(
      <DatePicker
        dates={dates}
        selectedDate={selectedDate}
        onDateSelect={onDateSelect}
      />
    );

    const dateCards = screen.getAllByRole("listitem");
    const firstCard = dateCards[1].firstChild as HTMLElement;
    fireEvent.click(firstCard);

    expect(onDateSelect).toHaveBeenCalledTimes(1);
    expect(onDateSelect).toBeCalledWith(selectedDate);
  });
});
