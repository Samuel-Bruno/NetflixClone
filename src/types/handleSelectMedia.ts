import { DetailedMedia } from "./api/getDetailedMedia";
import { Movie } from "./movie"
import { TVListResult as Tv } from "./Tv"

export type HandleSelectMediaProps = {
  type: 'movie';
  item: Movie;
} | {
  type: 'tv';
  item: Tv | DetailedMedia;
}