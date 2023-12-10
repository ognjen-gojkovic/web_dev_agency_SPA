import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("should correctly reneder component", () => {
  test("should first", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
