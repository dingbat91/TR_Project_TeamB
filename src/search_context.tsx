import debounce from "lodash.debounce";
import React, {
  useState,
  useContext,
  SetStateAction,
  Dispatch,
  useCallback,
} from "react";
import { getMoviesByKeyword } from "./scripts/utils";
import { MovieDetails } from "./types/movie";

const SearchContext = React.createContext<{
  searchedMovies: MovieDetails[];
  getSearchMovies: (value: string) => void;
  searchKeyword: string;
  updateSearchKeyword: Dispatch<SetStateAction<string>>;
  updateSearchMovies: Dispatch<SetStateAction<MovieDetails[]>>;
}>({
  searchedMovies: [],
  getSearchMovies: () => null,
  searchKeyword: "",
  updateSearchKeyword: () => null,
  updateSearchMovies: () => null,
});

export function useSearchDetails() {
  return useContext(SearchContext);
}

export function SearchDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchedMovies, setSearchedMovies] = useState<MovieDetails[]>([]);

  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const getSearchMovies = async (value: string) => {
    if (value) {
      const searchedMovieData = await getMoviesByKeyword(value);
      setSearchedMovies(searchedMovieData);
    } else {
      setSearchedMovies([]);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchDebounceCallback = useCallback(
    debounce(getSearchMovies, 500),
    []
  );

  return (
    <SearchContext.Provider
      value={{
        searchedMovies: searchedMovies,
        getSearchMovies: searchDebounceCallback,
        searchKeyword: searchKeyword,
        updateSearchKeyword: setSearchKeyword,
        updateSearchMovies: setSearchedMovies,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
