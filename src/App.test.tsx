import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import App from "./App";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("renders learn react link", () => {
  const { container } = render(<App />);
  screen.debug(container);

  expect(container).toMatchSnapshot();
});
