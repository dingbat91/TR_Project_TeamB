import React, { useContext } from "react";
import { WatchlistContext } from "../../layout/layout";

const Watchlist: React.FC = () => {
  const watchlistMoviesContext = useContext(WatchlistContext);
  return (
    <>
      <div className="text-center text-2xl pb-2.5">My WatchList</div>
      <div className="flex flex-wrap justify-center">
        {watchlistMoviesContext.length > 0 ? (
          watchlistMoviesContext.map((movie) => (
            <div className="basis-1/6 m-1" key={`watchlist-${movie.id}`}>
              <img
                className="md:w-56"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`${movie.original_title} movie poster`}
              />
            </div>
          ))
        ) : (
          <p>No movies added to watchlist</p>
        )}
      </div>
    </>
  );
};

export default Watchlist;
