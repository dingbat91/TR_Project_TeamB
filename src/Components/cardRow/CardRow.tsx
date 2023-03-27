import React, { useState, useContext } from "react";

import { MovieData } from "../../card/movie_card";
import { GenreContext } from "../../pages/homepage/Homepage";
import { Movie } from "../../types/movie";
import "./CardRow.css";

// export interface movieDetails {
//   movieData: Movie;
//   genre: number[];
// }

interface CardRowInterface {
  movies: Movie[];
  title: string;
}

export const CardRow: React.FC<CardRowInterface> = ({ movies, title }) => {
  const [filter, setFilter] = useState<string>("A"); // 28
  const Genres = useContext(GenreContext);

  console.log(filter);
  console.log(Genres);

  return (
    <>
      {/* <Dropdown
				options={Genres}
				name='RowLabel'
				value=''
				onChangeHandler={setFilter}
			/> */}

      <>
        {movies.map((movie: Movie) => (
          <React.Fragment key={`movie-data-${movie.id}`}>
            {(movie.genre_ids.includes(parseInt(filter)) || filter === "A") && (
              <MovieData movieDetails={movie} title={title} />
            )}
          </React.Fragment>
        ))}
      </>
    </>
  );
};
