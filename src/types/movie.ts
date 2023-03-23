export interface MovieDetails {
	adult: boolean;
	backdrop_path: string | null;
	belongs_to_collection: object | null;
	budget: number;
	genres: Genre[];
	homepage: string | null;
	id: number;
	imdb_id: string | null;
	original_language: string;
	original_title: string;
	overview: string | null;
	popularity: number;
	poster_path: string | null;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date?: Date;
	revenue?: number;
	runtime?: number | null;
	spoken_languages: SpokenLanguage[];
	status?:
		| "Rumored"
		| "Planned"
		| "In Production"
		| "Post Production"
		| "Released"
		| "Canceled";
	tagline?: string | null;
}

interface Genre {
	id: number;
	name: string;
}

interface ProductionCompany {
	name: string;
	id: number;
	logo_path?: string;
	origin_country?: string;
}

interface ProductionCountry {
	iso_3166_1?: string;
	name?: string;
}

interface SpokenLanguage {
	iso_639_1?: string;
	name?: string;
}

export interface TopRatedMovie {
	page: number;
	results: {
		adult: boolean;
		backdrop_path: string | null;
		genre_ids: number[];
		id: number;
		original_language: string;
		original_title: string;
		overview: string;
		popularity: number;
		poster_path: string | null;
		release_date: string;
		title: string;
		video: boolean;
		vote_average: number;
		vote_count: number;
	}[];
	total_pages: number;
	total_results: number;
}
