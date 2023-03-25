import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieDetails } from "../../types/movie";
import { SearchResults } from "./type";

const SearchResult: React.FC<SearchResults> = ({ searchResults }) => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="relative z-10 bg-white border border-gray-100 w-full mt-2">
        {searchResults.map(
          ({ id, original_title, overview, poster_path }: MovieDetails) => (
            <li
              key={`search_result_${id}`}
              onClick={() => {
                navigate(`/movie/${id}`);
              }}
              className="hero bg-base-200 border-b-8 my-4 py-4 px-2"
            >
              <div className="hero-content flex flex-row flex-wrap">
                <div className="w-1/3">
                  <img
                    alt={`movie-${original_title}`}
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    className="rounded-lg shadow-2xl fit-content"
                  />
                </div>

                <div className="w-2/3 pl-3">
                  <span className="font-bold">{original_title}</span>
                  <p className="py-1">{overview}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default SearchResult;
