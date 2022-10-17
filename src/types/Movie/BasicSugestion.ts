export type MovieSugestions = {
  page: number;
  results: [MovieSugestion];
  total_pages: number;
  total_results: number;
}

export type MovieSugestion = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}