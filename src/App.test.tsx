import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders Team PopCorn header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Team PopCorn/i);
  expect(linkElement).toBeInTheDocument();
});
test("render select dropdown value correctly", async () => {
  render(<App />);
  const selectInputElement = screen.getByLabelText(/select-options/);

  expect(selectInputElement).toBeInTheDocument();
  fireEvent.change(selectInputElement, { target: { value: "12" } });
  const selectElement = await screen.findByLabelText(/select-options/);
  expect(selectElement).toHaveValue("12");
});
