import { render } from "@testing-library/react";
import { Loading } from "../Loading";

describe("Loading", () => {
  it("renders the loading component", () => {
    const { getByText } = render(<Loading />);

    expect(getByText("Loading delivery times...")).toBeInTheDocument();
  });
});
