import { render } from "@testing-library/react";
import { AstroDatePicker } from "./AstroDatePicker";

describe("AstroDatePicker", () => {
  test("Should render component correctly.", () => {
    const { container } = render(<AstroDatePicker setValue={jest.fn()} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
