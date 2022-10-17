import { Author, CastPerson, CrewPerson, DetailedMedia, GenreId, Network, ProductionCompany, ProductionCountry, Season } from "./api/getDetailedMedia";

export type TvSugestions = {
  page: number;
  results: BasicSugestion[];
  total_pages: number;
  total_results: number;
}

export type BasicSugestion = {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  origin_country: [string];
  poster_path: string;
  popularity: number;
  name: string;
  vote_average: number;
  vote_count: number;
}

export type Sugestion = BasicSugestion & {
  created_by: Author[],
  episode_run_time: [],
  genres: GenreId[],
  homepage: string,
  in_production: boolean,
  languages: [],
  last_air_date: string,
  last_episode_to_air: {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    runtime: number,
    season_number: number,
    show_id: number,
    still_path: string,
    vote_average: number,
    vote_count: number
  },
  next_episode_to_air: {
    air_date: string,
    episode_number: number,
    id: number,
    name: string,
    overview: string,
    production_code: string,
    runtime: number,
    season_number: number,
    show_id: number,
    still_path: string,
    vote_average: number,
    vote_count: number
  },
  networks: Network[],
  number_of_episodes: number,
  number_of_seasons: number,
  production_companies: ProductionCompany[],
  production_countries: ProductionCountry[],
  seasons: Season[],
  spoken_languages: [],
  status: string,
  tagline: string,
  type: string,
  credits: {
    cast: CastPerson[],
    crew: CrewPerson[]
  }
}