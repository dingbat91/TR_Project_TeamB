import { render, screen } from "@testing-library/react";
import Watchlist from "./watchlist";

test("renders watchlist component correctly", () => {
  render(<Watchlist />);
  const watchListComponent = screen.getByText("My Watchlist");
  expect(watchListComponent).toBeInTheDocument();
});
