import { fireEvent, render, screen } from "@testing-library/react";

import SearchInput from "./SearchInput";
const onChangeHandler = jest.fn();

test("renders search element correctly with aria label", () => {
  render(<SearchInput onChangeHandler={onChangeHandler} />);
  const SearchComponentElement = screen.getByLabelText("search");

  expect(SearchComponentElement).toBeInTheDocument();
});

test("renders searched value correctly on onchange handler", () => {
  render(<SearchInput onChangeHandler={onChangeHandler} />);
  const SearchComponentElement = screen.getByLabelText("search");

  fireEvent.change(SearchComponentElement, { target: { value: "movie" } });
  expect(SearchComponentElement).toHaveValue("movie");
});
