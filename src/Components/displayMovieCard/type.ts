import { MovieDetails } from "../../types/movie";

export interface DisplayMovieCardProps {
  movieDetail: MovieDetails;
  children?: React.ReactNode;
}
