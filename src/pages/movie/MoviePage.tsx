import React, { useEffect, useState } from "react";
import { APIFetch } from "../../scripts/fetch/fetch";
import { useNavigate } from "react-router-dom";
import "./MoviePage.css";
import {
	Credits,
	MovieDetails,
	movieTrailerDetails,
	movieTrailerResult,
} from "../../types/movie";
import { useParams } from "react-router-dom";
import AddToWatchlist from "../../Components/addToWatchlist/addToWatchlist";
import { useWatchListContext } from "../../watchList_context";

export const MoviePage: React.FC = () => {
	const Navigate = useNavigate();
	const [moviedata, setMovieData] = useState<MovieDetails>();
	const { movieID } = useParams();
	const [movieTrailerData, setmovieTrailerData] =
		useState<movieTrailerResult[]>();
	const [credits, setCredits] = useState<Credits>();

	useEffect(() => {
		const datafetch = async () => {
			//fetches movie data
			const data = await APIFetch(`/movie/${movieID}`);
			setMovieData(data);

			//fetches Trailer data
			const trailerdata: movieTrailerDetails = await APIFetch(
				`/movie/${movieID}/videos`
			);
			if (trailerdata.results) {
				setmovieTrailerData(trailerdata.results);
			}

			//fetches credits data
			const creditsdata: Credits = await APIFetch(`/movie/${movieID}/credits`);
			if (creditsdata) {
				setCredits(creditsdata);
			}
		};
		datafetch();
	}, [movieID]);

	const { handleWatchListClick, watchlistedMovies } = useWatchListContext();
	return (

		<main className='moviePage'>
			<div className="container__main-left">
				<div className="movie__top-container">
					<div className="movie__poster">
						{moviedata && (
							<AddToWatchlist
								onClickHandler={() => handleWatchListClick(moviedata)}
								isAdded={
									moviedata
										? watchlistedMovies.some((movie) => movie.id === moviedata.id)
										: false
								}
							/>
						)}
						<img
							alt={`${moviedata?.original_title} poster`}
							className='moviePage__details__img'
							src={`https://image.tmdb.org/t/p/original${moviedata?.poster_path}`}
						/>
					</div>
					<div className="movie__trailer">
						{movieTrailerData && movieTrailerData[0] && (
							<iframe

								id="moviePage_trailer"
								src={`https://www.youtube.com/embed/${movieTrailerData[0].key}`}
								data-allow='accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
								title={movieTrailerData[0].name}
								loading='lazy'
							></iframe>
						)}
					</div>
				</div>

				<div className="content_container-details">
					<div className="content__left">
						<div className="container__title">
							<h1 className="movie__title"><strong>{moviedata?.original_title}</strong></h1>
							<h3 className='infoBox__tagline'><em>{moviedata?.tagline}</em></h3>
						</div>
						<div className="container__details-overview">
							<p>{moviedata?.overview}</p>
						</div>
						<div className="container__details-genre">
							<h5 className='detailsBox__genre__Title'>Genre: </h5>
							<p className='detailsBox__genre'>
								{moviedata?.genres.map((genre) => genre.name).join(", ")}
							</p>
							<h5 className='detailsBox__releaseStatus__title'>Status: </h5>
							<p className='detailsBox__releaseStatus'>{moviedata?.status}</p>
						</div>
					</div>
				</div>
				<div className="content__container-cast">
					<div className="content__right">
							<div className="right__details-title">
								<h3 className='detailsBox__cast__Title'>Cast & Crew</h3>
							</div>
							<div className="left__details-content">
							{!credits && <p>Loading...</p>}
								{credits &&
									credits.cast &&
									credits.cast.slice(0, 10).map(
										(cast) =>
											cast.profile_path && (
												<>
													<div className="avatar__container">
														<img
															className='avatar_image'
															src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
															alt={cast.name}
															onClick={() => Navigate(`/actor/${cast.id}`)}
														/>
													
														<strong><h5 className='moviePage__Cast__card__name'>{cast.name}</h5></strong>
														<em><p className='moviePage__Cast__card__character'>
															{`"${cast.character}"`}
														</p></em>
													</div>
												</>
											)
									)}	
							</div>																																		
					</div>
				</div>
			</div>

			<aside>
				<div className="movie__trailers-list">

					{/*Displays Trailers if there are any*/}
					{movieTrailerData && movieTrailerData.length >= 1 && (
						<h1 className='moviePage__Trailer__title'>Trailers</h1>
					)}
					{movieTrailerData?.slice(0, 5).map((trailer) => (
						<div className="container__iframe">
						<iframe
							className='moviePage__Trailer__video'
							src={`https://www.youtube.com/embed/${trailer.key}`}
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							title={trailer.name}
							loading='lazy'
						></iframe>
						</div>
					))}

				</div>
			</aside>
		</main>

	);

};
