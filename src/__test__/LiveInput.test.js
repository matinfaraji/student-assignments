import LiveInput from "../components/4-LiveInput/LiveInput";
import { render, screen, fireEvent } from "@testing-library/react";
describe("LiveInput ", () => {
  it("renders  'Enter a text'", () => {
    render(<LiveInput />);
    const input = screen.getByPlaceholderText("Enter a text");
    expect(input).toBeInTheDocument();
  });

  it("renders an h2 ", () => {
    render(<LiveInput />);
    const h2Element = screen.getByRole("heading", { level: 2 });
    expect(h2Element).toBeInTheDocument();
  });

  it("displays the entered ", () => {
    render(<LiveInput />);
    const input = screen.getByPlaceholderText("Enter a text");
    fireEvent.change(input, { target: { value: "Hello, world!" } });
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toHaveTextContent("Hello, world!");
  });
});
