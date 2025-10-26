import PolymorphicButton from "@/components/ui/PolymorphicButton";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("PolymorphicButton", () => {
  test("renders button text", () => {
    render(<PolymorphicButton text="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick handler", () => {
    const handleClick = jest.fn();
    render(<PolymorphicButton text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("shows loading state when isSubmitting", () => {
    render(<PolymorphicButton text="Click Me" isSubmitting />);
    expect(screen.getByText("Sending...")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("renders as Link when href is provided", () => {
    render(<PolymorphicButton text="Go Home" href="/home" />);
    const link = screen.getByRole("link", { name: /go home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/home");
  });
});
