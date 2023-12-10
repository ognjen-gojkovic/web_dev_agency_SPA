import React from "react";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { screen, render } from "@testing-library/react";
import AboutUs from "./AboutUs";

describe("About Us component test", () => {
  test("should correctly render component", () => {
    const { container } = render(<AboutUs />);

    mockAllIsIntersecting(true);
    expect(container).toMatchSnapshot();
  });
  test("should correctly register user input", () => {
    render(<AboutUs />);

    const tag = screen.getByText("# web and mobile development");

    //mockAllIsIntersecting(true);
    expect(tag).toBeInTheDocument();
  });
});
