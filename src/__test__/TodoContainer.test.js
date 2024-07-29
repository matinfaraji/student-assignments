


import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App"; 

describe("App component", () => {
  it("renders a single todo item when the form is submitted once", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("write a todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Buy groceries" } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText("Buy groceries");
    expect(todoItem).toBeInTheDocument();
  });

  it("renders multiple todo items when the form is submitted with different todos", () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText("write a todo");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(inputElement, { target: { value: "Read a book" } });
    fireEvent.click(addButton);

    fireEvent.change(inputElement, { target: { value: "Go for a walk" } });
    fireEvent.click(addButton);

    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(2);
    expect(todoItems[0]).toHaveTextContent("Read a book");
    expect(todoItems[1]).toHaveTextContent("Go for a walk");
  });
});
