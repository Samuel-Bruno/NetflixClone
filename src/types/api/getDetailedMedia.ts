export type DetailedMedia = {
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

export type Author = {
  id: number,
  credit_id: string,
  name: string,
  gender: number,
  profile_path: string
}

export type GenreId = {
  id: number,
  name: string
}

export type Network = {
  id: number,
  name: string,
  logo_path: string,
  origin_country: string
}

export type ProductionCompany = {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

export type ProductionCountry = {
  iso_3166_1: string,
  name: string,
}

export type Season = {
  air_date: string,
  episode_count: number,
  id: number,
  name: string,
  overview: string,
  poster_path: string,
  season_number: number
}

export type CastPerson = {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: string,
  character: string,
  credit_id: string,
  order: number
}

export type CrewPerson = {
  adult: boolean,
  gender: number,
  id: number,
  known_for_department: string,
  name: string,
  original_name: string,
  popularity: number,
  profile_path: null,
  credit_id: string,
  department: string,
  job: string
}
