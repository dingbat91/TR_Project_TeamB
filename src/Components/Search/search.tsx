import React from "react";
import { useSearchDetails } from "../../search_context";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

const Search: React.FC = () => {
  const { searchedMovies, getSearchMovies, searchKeyword } = useSearchDetails();

  return (
    <div className="w-full">
      <div className="flex items-center  h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <SearchInput value={searchKeyword} onChangeHandler={getSearchMovies} />
      </div>
      <SearchResult searchResults={searchedMovies} />
    </div>
  );
};

export default Search;
