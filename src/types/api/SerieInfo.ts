import { SeasonData } from "../TvSeason"
import { Sugestion } from "../TvSugestions"
import { DetailedMedia } from "./getDetailedMedia"

export type SerieInfo = DetailedMedia & {
  seasonsData: SeasonData[];
  sugestions: {
    page: number;
    results: Sugestion[];
    total_pages: number;
    total_results: number;
  };
}