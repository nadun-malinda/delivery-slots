import { render } from "@testing-library/react";
import { Status } from "../Status";

// Sample test data
const message = "Status message";

describe("Status", () => {
  it("render status component", () => {
    const { getByText } = render(<Status message={message} />);

    expect(getByText(message)).toBeInTheDocument();
  });
});
