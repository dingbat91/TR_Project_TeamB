import React from "react";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import { SearchProps } from "./type";

const Search: React.FC<SearchProps> = ({ searchResults, onChangeHandler }) => {
  return (
    <div className="max-w-md mx-auto absolute left-1/3	right-1/3">
      <SearchInput onChangeHandler={onChangeHandler} />
      <SearchResult searchResults={searchResults} />
    </div>
  );
};

export default Search;
