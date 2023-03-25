import React, { useCallback, useState } from "react";
import "./Homepage.css";
import Card from "../../components/card/card";
import Search from "../../components/Search/search";
import { getMoviesByKeyword } from "../../scripts/utils";
import { MovieDetails } from "../../types/movie";
import debounce from "lodash.debounce";

export function Homepage() {
  //TODO Implement https://api.themoviedb.org/3/genre/movie/list?api_key=API_KEY&language=en-US
  // to get all genres
  // const [genres, setGenres] = useState<Array<any>>([
  //   {
  //     id: 28,
  //     name: "Action",
  //   },
  //   {
  //     id: 12,
  //     name: "Adventure",
  //   },
  //   {
  //     id: 16,
  //     name: "Animation",
  //   },
  //   {
  //     id: 35,
  //     name: "Comedy",
  //   },
  //   {
  //     id: 80,
  //     name: "Crime",
  //   },
  // ]);
  // const [selectedGenreID, setSelectedGenreID] = useState<string>(genres[0].id);

  // const handleGenreChange = (value: string) => {
  //   setSelectedGenreID(value);
  // };

  // const [searchKeyword, setSearchKeyword] = useState<string>("");
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
  // const handleSearchKeyDown = async (
  //   event: React.KeyboardEvent<HTMLInputElement>
  // ) => {
  //   if (event.key === "Enter") {
  //     const searchedMovieData = await getMoviesByKeyword(searchKeyword);
  //     setSearchedMovies(searchedMovieData);
  //   }
  // };

  return (
    <div className="App bg-slate-200">
      <Search
        onChangeHandler={searchDebounceCallback}
        searchResults={searchedMovies}
        //onKeyDownHandler={handleSearchKeyDown}
      />
      {/* <div>
        {searchedMovies.map((movie: MovieDetails) => (
          <React.Fragment key={movie.id}>
            <Card movieDetails={movie} />
          </React.Fragment>
        ))}
      </div> */}
    </div>
  );
}
