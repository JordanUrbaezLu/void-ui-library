import { render } from "@testing-library/react";
import AstroNavbar from "./AstroNavbar";

describe("AstroCalendar", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<AstroNavbar />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
