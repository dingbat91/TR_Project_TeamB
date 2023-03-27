import { useNavigate } from "react-router-dom";
import { DisplayMovieCardProps } from "./type";

const DisplayMovieCard: React.FC<DisplayMovieCardProps> = ({
  movieDetail,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="display-movie-card flex flex-col items-center basis-1/6 m-3"
      key={`watchlist-${movieDetail.id}`}
    >
      <img
        className="md:w-56 cursor-pointer"
        src={`https://image.tmdb.org/t/p/w342/${movieDetail.poster_path}`}
        alt={`${movieDetail.original_title} movie poster`}
        onClick={() => {
          navigate(`/movie/${movieDetail.id}`);
        }}
      />
      {children && children}
    </div>
  );
};

export default DisplayMovieCard;
