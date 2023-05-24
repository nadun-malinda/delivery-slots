import { render, fireEvent } from "@testing-library/react";
import { useFormData } from "../../../hooks/useFormData";
import SubmitSection from "../SubmitSection";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("../../../hooks/useFormData");

describe("SubmitSection", () => {
  const mockUseFormData = useFormData as jest.MockedFunction<
    typeof useFormData
  >;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the submit section correctly", () => {
    mockUseFormData.mockReturnValue({ hasAllData: true });

    const { getByText } = render(<SubmitSection />);

    const submitButton = getByText("Move on >");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).not.toHaveClass("disabled");
  });

  it("disables the submit button when data is incomplete", () => {
    mockUseFormData.mockReturnValue({ hasAllData: false });

    const { getByText } = render(<SubmitSection />);

    const submitButton = getByText("Move on >");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveClass("disabled");
  });

  it("replace the route when the submit button is clicked", () => {
    mockUseFormData.mockReturnValue({ hasAllData: true });

    const { getByText } = render(<SubmitSection />);

    const submitButton = getByText("Move on >");
    fireEvent.click(submitButton);

    expect(mockRouter).toMatchObject({
      pathname: "/summary"
    });
  });
});
