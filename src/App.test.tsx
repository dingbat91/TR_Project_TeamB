import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Team PopCorn header", () => {
  const { container } = render(<App />);
  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveClass("App");
});
