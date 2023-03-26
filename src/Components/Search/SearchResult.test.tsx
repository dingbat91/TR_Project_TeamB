import { render, screen } from "@testing-library/react";
import { searchKeywordMockResponse } from "../../scripts/fetch/testing/mswConfig/mock";

import SearchResult from "./SearchResult";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
test("renders SearchResult component correctly with results", () => {
  render(<SearchResult searchResults={searchKeywordMockResponse.results} />);
  const SearchComponentElement = screen.getAllByRole("listitem");
  expect(SearchComponentElement).toHaveLength(
    searchKeywordMockResponse.results.length
  );
});

test("renders SearchResult component correctly when empty results", () => {
  render(<SearchResult searchResults={[]} />);
  const SearchComponentElement = screen.getAllByRole("listitem");
  const noRecordsFound = screen.getByText("No results found!");
  expect(SearchComponentElement).toHaveLength(1);
  expect(noRecordsFound).toBeInTheDocument();
});
