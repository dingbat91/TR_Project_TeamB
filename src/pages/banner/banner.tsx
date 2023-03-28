import React, { createContext, useEffect, useState } from "react";
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Genre } from "../../types/genres";
import { Movie } from "../../types/movie";
import Image from 'next/legacy/image'
import { baseUrl } from "../../Components/constant/imageurl";
import { FaPlay } from 'react-icons/fa';
import { modalState, movieState } from '../../Components/atoms/modalAtom';
import { useRecoilState } from 'recoil';

export interface movieDetails {
	  movieData: Movie[];
	}

export const GenreContext = createContext<Genre[]>([]);

export function Banner({movieData}: movieDetails) {

	const [popularMovies, setPopularMovies] = useState<Movie | null >(null);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    const [showModal, setShowModal] = useRecoilState(modalState)

  useEffect(() => {
    setPopularMovies(
        movieData[Math.floor(Math.random() * movieData.length)]
    )
  }, [movieData])
	return (
		<div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${popularMovies?.backdrop_path || popularMovies?.poster_path}`}
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {popularMovies?.title  || popularMovies?.original_title}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {popularMovies?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(popularMovies)
            setShowModal(true)
          }}
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
	);
}
