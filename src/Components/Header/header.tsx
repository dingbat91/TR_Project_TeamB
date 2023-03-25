import debounce from "lodash.debounce";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { getMoviesByKeyword } from "../../scripts/utils";
import { MovieDetails } from "../../types/movie";
import Search from "../Search/search";

export const UpdateSearchedMoviesContext = createContext<
  Dispatch<SetStateAction<MovieDetails[]>>
>(() => null);

const Header: React.FC = () => {
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
    <nav className="flex w-screen h-12 my-4">
      <div className="flex-1 flex justify-center mr-auto">
        <button className="mx-2">Logo</button>
      </div>

      <div className="flex-1 flex justify-center">
        <UpdateSearchedMoviesContext.Provider value={setSearchedMovies}>
          <Search
            onChangeHandler={searchDebounceCallback}
            searchResults={searchedMovies}
          />
        </UpdateSearchedMoviesContext.Provider>
      </div>

      <div className="flex-1 flex justify-center ml-auto">
        <button className="mx-2">My Watchlist</button>
      </div>
    </nav>
  );
};

export default Header;
