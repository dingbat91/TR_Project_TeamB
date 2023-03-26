import React, { createContext, useEffect, useState } from "react";
// import "./Homepage.css";
import Card from "../../Components/card/card";
import { getMoviesByKeyword } from "../../scripts/services/service";
import { Movie, MovieDetails, PopularMoviesResponse } from "../../types/movie";
import { Genre } from "../../types/genres";
import { APIFetch } from "../../scripts/fetch/fetch";
import { CardRow } from "../../Components/cardRow/CardRow";
// import { movieDetails } from "../../components/cardRow/CardRow";

export const GenreContext = createContext<Genre[]>([]);

export function Homepage() {
  const [genrelist, setGenreList] = useState<Genre[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  //Genre useEffect
  useEffect(() => {
    const fetchGenre = async () => {
      const data = await APIFetch("/genre/movie/list");
      setGenreList(data.genres);
    };
    fetchGenre();
  }, []);

  //Movie list useEffect
  useEffect(() => {
    const fetchRows = async () => {
      const data = await APIFetch("/movie/popular", [
        { param: "adult", value: false },
        { param: "without_companies", value: "2740" }, // added to hide improper movie id 1087040
      ]);
      // const popdata: movieDetails[] = data.results.map((movie) => {
      //   return { movieData: movie, genre: movie.genre_ids };
      // });
      setPopularMovies(data.results);
    };
    fetchRows();
  }, []);

  //   const [searchedMovies, setSearchedMovies] = useState<MovieDetails[]>([]);

  return (
    <div className="App">
      {/* <div>
        {searchedMovies.map((movie: MovieDetails) => (
          <Card movieDetails={movie} />
        ))}
      </div> */}
      <GenreContext.Provider value={genrelist}>
        <div className="card__netflixOriginal">
          <div className="card_title">
            <h2>Netflix Original</h2>
          </div>
          <div className="original__movies">
            <CardRow title="Netflix" movies={popularMovies} />
          </div>
        </div>
        <div className="card__movies">
          <div className="movies__header">
            <h2>Trending Now</h2>
          </div>
          <div className="movies__container">
            <CardRow title="Trending" movies={popularMovies} />
          </div>
        </div>
        <div className="card__movies">
          <div className="movies__header">
            <h2>Top Rated</h2>
          </div>
          <div className="movies__container">
            <CardRow title="top rated" movies={popularMovies} />
          </div>
        </div>
      </GenreContext.Provider>
    </div>
  );
}
