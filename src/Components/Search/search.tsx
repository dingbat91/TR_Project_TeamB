import React from "react";
import { SearchProps } from "./type";

const Search: React.FC<SearchProps> = ({
  value,
  onChangeHandler,
  onKeyDownHandler,
}) => {
  return (
    <>
      <input
        type="search"
        id="query"
        name="q"
        placeholder="Search..."
        onChange={({ target }) => {
          onChangeHandler(target.value);
        }}
        onKeyDown={(event) => {
          onKeyDownHandler(event);
        }}
      />
    </>
  );
};

export default Search;
