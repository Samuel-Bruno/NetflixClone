export type Credit = {
  credit_type: string,
  department: string,
  job: string,
  media: Media,
  media_type: string,
  id: string,
  person: {
    name: string,
    id: number
  }
}

export type Media = {
  id: number,
  name: string,
  original_name: string,
  character: string,
  episodes: [],
  seasons: Season[]
}

export type Season = {
  air_date: string,
  poster_path: string,
  season_number: number
}