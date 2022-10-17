import { CastPerson, CrewPerson, ProductionCompany, ProductionCountry } from "../api/getDetailedMedia"
import { MovieSugestions } from "./BasicSugestion"

export type MovieInfo = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  sugestions: MovieSugestions;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  credits: {
    cast: CastPerson[];
    crew: CrewPerson[];
  };
  videos: {
    results: VideosResult[];
  };
  images: {
    backdrops: string[];
    logos: string[];
    posters: string[];
  };
}

type Genres = {
  id: number;
  name: string;
}

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
}

type VideosResult = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: string;
  published_at: string;
  id: string;
}