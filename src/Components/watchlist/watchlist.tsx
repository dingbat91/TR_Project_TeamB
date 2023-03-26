import React from "react";
import { useWatchListContext } from "../../watchList_context";

const Watchlist: React.FC = () => {
  const { watchlistedMovies, handleWatchListClick } = useWatchListContext();

  return (
    <>
      <div className="text-center text-2xl pb-2.5">My Watchlist</div>
      <div className="flex flex-wrap justify-center">
        {watchlistedMovies.length > 0 ? (
          watchlistedMovies.map((movie) => (
            <div
              className="flex flex-col items-center basis-1/6 m-1"
              key={`watchlist-${movie.id}`}
            >
              <img
                className="md:w-56"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={`${movie.original_title} movie poster`}
              />
              <button
                onClick={() => {
                  handleWatchListClick(movie);
                }}
                className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white hover:bg-white group w-full"
              >
                <span className="w-56 h-48 rounded rotate-[-40deg] bg-red-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Remove
                </span>
              </button>
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
