import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchDetails } from "../../search_context";
import { Movie, MovieDetails } from "../../types/movie";
import { SearchResults } from "./type";

const SearchResult: React.FC<SearchResults> = ({ searchResults }) => {
  const navigate = useNavigate();
  const { updateSearchMovies, updateSearchKeyword } = useSearchDetails();

  return (
    <>
      <ul className="relative z-10 bg-white border-gray-100 w-full mt-2">
        {searchResults.length > 0 ? (
          searchResults.map(
            ({ id, original_title, overview, poster_path }: Movie) =>
              poster_path &&
              overview &&
              original_title && (
                <li
                  key={`search_result_${id}`}
                  onClick={() => {
                    updateSearchMovies([]);
                    updateSearchKeyword("");
                    navigate(`/movie/${id}`);
                  }}
                  className="hero cursor-grab bg-base-200 border-b-8 my-4 py-4 px-2"
                >
                  <div className="hero-content flex w-full">
                    <div className="fit-content w-1/5">
                      <img
                        alt={`movie-${original_title}`}
                        src={`https://image.tmdb.org/t/p/w92/${poster_path}`}
                        className="rounded-lg shadow-2xl m-auto"
                      />
                    </div>

                    <div className="w-4/5	 pl-3 text-left">
                      <span className="font-bold text-stone-900">
                        {original_title}
                      </span>
                      <p className="py-1">
                        {overview && overview.length >= 250 ? (
                          <button
                            onClick={() => {
                              navigate(`/movie/${id}`);
                            }}
                            className="text-stone-600 text-left"
                          >
                            {overview?.slice(0, 250)}
                            <span className="text-blue-500"> Read More..</span>
                          </button>
                        ) : (
                          <span className="text-stone-600 text-left">
                            {overview}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </li>
              )
          )
        ) : (
          <li
            key={`search_result_no-records`}
            className="hero cursor-grab bg-base-200 border-b-8 my-4 py-4 px-2 hidden"
          >
            No results found!
          </li>
        )}
      </ul>
    </>
  );
};

export default SearchResult;
