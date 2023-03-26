import { render, screen } from "@testing-library/react";
import Watchlist from "./watchlist";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders watchlist component correctly", () => {
  render(<Watchlist />);
  const watchListComponent = screen.getByText("My Watchlist");
  expect(watchListComponent).toBeInTheDocument();
});
