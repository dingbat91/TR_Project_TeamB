import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/header";
import { MovieDetails } from "../types/movie";

export const WatchlistContext = createContext<MovieDetails[]>([]);
export const UpdateWatchlistContext = createContext<
  Dispatch<SetStateAction<MovieDetails[]>>
>(() => null);

export const Layout: React.FC = () => {
  const [watchlistedMovies, setWatchlistedMovies] = useState<MovieDetails[]>(
    []
  );
  return (
    <>
      <Header />
      <WatchlistContext.Provider value={watchlistedMovies}>
        <UpdateWatchlistContext.Provider value={setWatchlistedMovies}>
          <Outlet />
        </UpdateWatchlistContext.Provider>
      </WatchlistContext.Provider>
    </>
  );
};
