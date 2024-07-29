import { render, screen } from "@testing-library/react";
import ListOfLi from "../components/2-ListOfLi/ListOfLi";
describe("test for ListOfLi component", () => {
  test("render", () => {
    const names = ["sara", "fatemeh"];
    render(<ListOfLi usernames={names} />);
    const list = screen.getAllByRole("listitem");
    expect(list.length).toBe(names.length);
  });
});
