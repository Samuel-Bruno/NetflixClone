import parseMediaListToUtilList from '../utils/parseMediaListToUtilList'
import { BASE_TMDB_URL as BaseUrl, API_TOKEN } from './TmdbConfig'
import { DetailedMedia } from '../types/api/getDetailedMedia'
import { TvSeason } from '../types/TvSeason'
import { Sugestion, TvSugestions } from '../types/TvSugestions'
import { SerieInfo } from '../types/api/SerieInfo'
import { MovieInfo } from '../types/Movie/MovieInfo'
import { MovieSugestions } from '../types/Movie/BasicSugestion'
import { TVListResult as Serie } from '../types/Tv'
import { Movie } from '../types/movie'


const grq = async (endpoint: string, credits: boolean = false, videos: boolean = false, images: boolean = false, params?: { title: string, value: string }[]) => {
  let prms = '?language=pt-br'

  if (credits || videos || images) {
    let choosed = []
    if (credits) choosed.push('credits')
    if (videos) choosed.push('videos')
    if (images) choosed.push('images')

    prms += `&append_to_response=${choosed.join(',')}`
  }
  if (params) {
    params.forEach(pm => {
      prms += `&${pm.title}=${pm.value}`
    })
  }

  const req = await fetch(`${BaseUrl}${endpoint}${prms}`, {
    headers: { 'Authorization': `Bearer ${API_TOKEN}` },
  })
  const json = await req.json()
  return json
}

const getAllMovies = async () => {
  const now_playingRq = grq('/movie/now_playing')
  const popularRq = grq('/movie/popular')
  const top_ratedRq = grq('/movie/top_rated')

  const categories = [
    parseMediaListToUtilList(await now_playingRq, 'movie', 'Passando agora'),
    parseMediaListToUtilList(await popularRq, 'movie', 'Filmes populares'),
    parseMediaListToUtilList(await top_ratedRq, 'movie', 'Bem Falados'),
  ]
  const randomCategory = Math.ceil(Math.random() * categories.length - 1)
  const randomOne: Movie = categories[randomCategory]
    .results[Math.ceil(Math.random() * categories[randomCategory].results.length - 1)]

  const highlight = await getFullMediaInfo('movie', randomOne.id)

  return {
    categories,
    highlight
  }
}

const getMediaDetails = async (mediaType: string, mediaId: number) => {
  const info = await grq(`/${mediaType}/${mediaId.toString()}`)
  return info as DetailedMedia
}

const getFullMediaInfo = async (mediaType: string, mediaId: number) => {
  const info = await grq(`/${mediaType}/${mediaId}`, true, true, true)
  return info
}

const getSeasonInfo = async (serieId: number, seasonNumber: number) => {
  const info = await grq(`/tv/${serieId}/season/${seasonNumber}`)
  return info
}

const getMovieInfo = async (movieId: number): Promise<MovieInfo> => {
  let res = await getFullMediaInfo('movie', movieId)

  let sugestions = await grq(`/movie/${movieId}/recommendations`) as MovieSugestions
  res.sugestions = sugestions

  return res
}

const getSerieInfo = async (serieId: number, seasonsQuantity: number): Promise<SerieInfo> => {
  let res = await grq(`/tv/${serieId}`, true, true, true)

  res.seasonsData = [] as TvSeason[]
  res.sugestions = [] as Sugestion[]

  if (seasonsQuantity > 0) {
    for (let i = 1; i <= seasonsQuantity; i++) {
      let sInfo = await grq(`/tv/${serieId}/season/${i}`)
      res.seasonsData.push(sInfo as TvSeason)
    }
  }

  let sugestions = await grq(`/tv/${serieId}/recommendations`) as TvSugestions

  let fullSugs: Sugestion[] = []
  const fetchFullSugestions = async () => {
    sugestions.results.forEach(async s => {
      let fullInfo = await getMediaDetails('tv', s.id)
      const sugestionObj = { ...fullInfo, ...s }
      fullSugs.push(sugestionObj)
    })
  }
  await fetchFullSugestions()
  res.sugestions.results = fullSugs


  return res
}

const getGenres = async () => {
  const moviesGenres = await grq('/genre/movie/list')
  const tvGenres = await grq('/genre/tv/list')

  return {
    moviesGenres,
    tvGenres
  }
}


const getAll = async () => {
  const moviesPopular = await grq('/movie/popular')
  const moviesTop_rated = await grq('/movie/top_rated')

  const tvPopular = await grq('/tv/popular')
  const tvTop_rated = await grq('/tv/top_rated')
  const tvOnTheAir = await grq('/tv/on_the_air')

  return [
    parseMediaListToUtilList(moviesPopular, 'movie', 'Filmes populares'),
    parseMediaListToUtilList(moviesTop_rated, 'movie', 'Filmes em Alta'),

    parseMediaListToUtilList(tvPopular, 'tv', 'Populares na TV'),
    parseMediaListToUtilList(tvTop_rated, 'tv', 'Bem falados na TV'),
    parseMediaListToUtilList(tvOnTheAir, 'tv', 'Na TV')
  ]
}

const getAllSeries = async () => {

  const tvPopular = await grq('/tv/popular')
  const tvTop_rated = await grq('/tv/top_rated')
  const tvOnTheAir = await grq('/tv/on_the_air')

  const categories = [tvPopular, tvTop_rated, tvOnTheAir]
  const randomCategory = Math.ceil(Math.random() * categories.length - 1)

  const randomOne: Serie = categories[randomCategory]
    .results[Math.ceil(Math.random() * categories[randomCategory].results.length - 1)]

  const highlight = await getMediaDetails('tv', randomOne.id)

  return {
    categories: [
      parseMediaListToUtilList(tvPopular, 'tv', 'Populares'),
      parseMediaListToUtilList(tvTop_rated, 'tv', 'Bem falados'),
      parseMediaListToUtilList(tvOnTheAir, 'tv', 'Passando na TV'),
    ],
    highlight
  }
}

const getNewMovies = async () => {
  const newMoviesRq = grq('/movie/now_playing')
  const moviesResults = await newMoviesRq
  return parseMediaListToUtilList(moviesResults, 'movie', 'Novidades')
}

const getUpcomingMovies = async () => {
  const upcomingMoviesRq = grq('/movie/upcoming')
  const upcomingMovies = await upcomingMoviesRq
  return parseMediaListToUtilList(upcomingMovies, 'movie', 'Vale a pena esperar')
}

const getTopTenMovies = async () => {
  const popularMoviesRq = await grq('/movie/popular')
  const parsedList = parseMediaListToUtilList(popularMoviesRq, 'movie', 'Top 10 Filmes Populares')
  const res = {
    ...parsedList,
    results: parsedList.results.slice(0, 10)
  }

  return res
}

const getTopTenTv = async () => {
  const popularSeriesRq = await grq('/tv/popular')
  const parsedList = parseMediaListToUtilList(popularSeriesRq, 'tv', 'Top 10 S??ries Populares')
  const res = {
    ...parsedList,
    results: parsedList.results.slice(0, 10)
  }

  return res
}


const get = {
  all: getAll,
  allMovies: getAllMovies,
  allSeries: getAllSeries,
  trendingMovies: () => grq('/movie/top_rated'),
  details: getMediaDetails,
  fullMediaInfo: getFullMediaInfo,
  seasonInfo: getSeasonInfo,
  movieInfo: getMovieInfo,
  serieInfo: getSerieInfo,
  genres: getGenres,
  newMovies: getNewMovies,
  upcomingMovies: getUpcomingMovies,
  topTenMovies: getTopTenMovies,
  topTenSeries: getTopTenTv,
}

export default {
  get
}