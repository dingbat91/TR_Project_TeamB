import { render, screen } from "@testing-library/react";

import Genres from "./genres";

test("renders Genres component correctly", () => {
  render(<Genres />);
  const genresComponent = screen.getByText("My Genres");
  expect(genresComponent).toBeInTheDocument();
});
