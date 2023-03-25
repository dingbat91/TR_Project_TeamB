import debounce from "lodash.debounce";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { Outlet } from "react-router-dom";
import Search from "../components/Search/search";
import { getMoviesByKeyword } from "../scripts/utils";
import { MovieDetails } from "../types/movie";

export const UpdateSearchedMoviesContext = createContext<
  Dispatch<SetStateAction<MovieDetails[]>>
>(() => null);

export const Layout: React.FC = () => {
  const [searchedMovies, setSearchedMovies] = useState<MovieDetails[]>([]);

  const handleSearchKeywordChange = async (value: string) => {
    if (value) {
      const searchedMovieData = await getMoviesByKeyword(value);
      setSearchedMovies(searchedMovieData);
    } else {
      setSearchedMovies([]);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchDebounceCallback = useCallback(
    debounce(handleSearchKeywordChange, 500),
    []
  );
  return (
    <>
      <UpdateSearchedMoviesContext.Provider value={setSearchedMovies}>
        <div className="h-12">
          <Search
            onChangeHandler={searchDebounceCallback}
            searchResults={searchedMovies}
          />
        </div>
      </UpdateSearchedMoviesContext.Provider>
      <Outlet />
    </>
  );
};
