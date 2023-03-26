import { Movie, MovieDetails } from "../../types/movie";

export interface SearchInputProps {
  onChangeHandler: (value: string) => void;
  value: string;
}

export interface SearchResults {
  searchResults: Movie[];
}

export interface SearchProps {
  searchResults: MovieDetails[];
  onChangeHandler: (value: string) => void;
}
