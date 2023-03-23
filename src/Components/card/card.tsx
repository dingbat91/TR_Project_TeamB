import React from "react";
import { MovieDetails } from "../../types/movie";

interface CardProps {
  movieDetails: MovieDetails;
}

const Card: React.FC<CardProps> = ({
  movieDetails: { poster_path, original_title, release_date, overview, id },
}) => {
  return (
    <>
      {poster_path ? (
        <div className="flex flex-wrap flex--movie">
          <div className="w-full md:w-full lg:w-1/2 max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
            <div className="md:flex-shrink-0">
              <img
                className="md:w-56"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
                alt={`${original_title} movie poster`}
              />
            </div>
            <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
              <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
                {original_title}
              </h3>
              <span className="movie--year text-xl lg:text-sm lg:mb-4">
                {release_date ? release_date.toString() : ""}
              </span>
              <div className="flex-grow">
                <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">
                  {overview}
                </p>
              </div>
              <div className="button-container flex justify-between mb-2">
                <button className="text-lg mr-4 lg:text-sm text-gray-200">
                  More Info-{id}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Card;
