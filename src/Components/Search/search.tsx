import React from "react";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import { SearchProps } from "./type";

const Search: React.FC<SearchProps> = ({ searchResults, onChangeHandler }) => {
  return (
    <div className="absolute max-w-md mx-auto left-1/3	right-1/3">
      <div className=" flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <SearchInput onChangeHandler={onChangeHandler} />
      </div>
      <SearchResult searchResults={searchResults} />
    </div>
  );
};

export default Search;
