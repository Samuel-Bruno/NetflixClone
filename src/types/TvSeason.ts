import { Author, CastPerson, CrewPerson, GenreId, Network, ProductionCompany, ProductionCountry, Season } from "./api/getDetailedMedia"


export type TvSeason = {
  adult: boolean,
  backdrop_path: string,
  created_by: Author[],
  episode_run_time: [],
  first_air_date: string,
  genres: GenreId[],
  homepage: string,
  id: number,
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
  name: string,
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
  origin_country: string[],
  original_language: string,
  original_name: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: ProductionCompany[],
  production_countries: ProductionCountry[],
  seasons: Season[],
  seasonsData: SeasonData[],
  spoken_languages: [],
  status: string,
  tagline: string,
  type: string,
  vote_average: number,
  vote_count: number,
  credits: {
    cast: CastPerson[],
    crew: CrewPerson[]
  }
}

export type SeasonData = {
  _id: string,
  air_date: string,
  episodes: Episode[],
  name: string,
  overview: string,
  id: number,
  poster_path: string,
  season_number: number
}

export type Episode = {
  air_date: string,
  episode_number: number,
  crew: Crew[],
  guest_stars: GuestStar[],
  id: number,
  name: string,
  overview: string,
  production_code: string,
  season_number: number,
  still_path: string,
  vote_average: number,
  vote_count: number
}

export type Crew = {
  department: string,
  job: string,
  credit_id: string,
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string
}

export type GuestStar = {
  credit_id: string,
  order: number,
  character: string,
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string
}