import React, { useEffect, useState } from "react";
import { APIFetch } from "../../scripts/fetch/fetch";
import "./MoviePage.css";
import { MovieDetails } from "../../types/movie";
import { useParams } from "react-router-dom";

export const MoviePage: React.FC = () => {
  const [moviedata, setMovieData] = useState<MovieDetails>();
  const { movieID } = useParams();

  useEffect(() => {
    const datafetch = async () => {
      if (process.env.REACT_APP_APIKEY) {
        const data = await APIFetch(`/movie/${movieID}`);
        setMovieData(data);
      } else {
        throw new Error("Missing API KEY");
      }
    };
    datafetch();
  }, [movieID]);

  return (
    <main className="moviePage">
      <h1 className="moviePage__title">{moviedata?.original_title}</h1>
      <div className="moviePage__details">
        <img
          className="moviePage__details__img"
          src={`https://image.tmdb.org/t/p/original${moviedata?.poster_path}`}
        />
        <div className="moviePage__details__infoBox">
          <p className="infoBox__tagline">{moviedata?.tagline}</p>
          <h2 className="infoBox__overviewTitle">Overview:</h2>
          <p className="infoBox__Overview">{moviedata?.overview}</p>
          <h2 className="infoBox__detailsTitle">Details</h2>
          <div className="infoBox__detailsBox">
            <div className="detailsBox__Col1">
              <h3 className="detailsBox__releaseStatus__title">Status</h3>
              <p className="detailsBox__releaseStatus">{moviedata?.status}</p>
              <h3 className="detailsBox__genre__Title">Genre</h3>
              <p className="detailsBox__genre">
                {moviedata?.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
            <div className="detailsBox__Col2">
              <h3 className="detailsBox__budget__title">Budget</h3>
              <p className="detailsBox__budget">
                {moviedata?.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <h3 className="detailsBox__revenue__title">Revenue</h3>
              <p className="detailsBox__revenue">
                {moviedata?.revenue?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "usd",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
