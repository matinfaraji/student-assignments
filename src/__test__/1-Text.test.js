import { render, screen } from "@testing-library/react";

import Text from "../components/1-Text/Text";
describe("test for TEXT component", () => {
  test("welcome render", () => {
    render(<Text />);
    const welcoming = screen.getByText("Welcome To APS");
    expect(welcoming).toBeInTheDocument("Welcome To APS");
  });
  it('headingText  render', () => {
    const matin = "matin"
    render(<Text headingText={matin}/>)
    const heading = screen.getByText(matin)
    expect(heading).toBeInTheDocument(matin)
  });
});
