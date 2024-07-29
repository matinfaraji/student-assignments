import { screen, render, fireEvent } from "@testing-library/react";
import Login from "../components/3-Login/Login.jsx";


describe("first", () => {
  test("login", () => {
    render(<Login />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("button displays login", () => {
    render(<Login />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("login");
  });
  it("button text changes", () => {
    render(<Login />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveTextContent("logout");
  });
});
