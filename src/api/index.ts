import parseMediaListToUtilList from '../utils/parseMediaListToUtilList'
import { BASE_TMDB_URL as BaseUrl, API_TOKEN, API_KEY } from './TmdbConfig'
import { DetailedMedia } from '../types/api/getDetailedMedia'
import { TvSeason } from '../types/TvSeason'


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
  const latest = await grq('/movie/latest')
  const popular = await grq('/movie/popular')
  const top_rated = await grq('/movie/top_rated')

  return {
    latest,
    popular,
    top_rated
  }
}

const getMediaDetails = async (mediaType: string, mediaId: number): Promise<DetailedMedia> => {
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

const getSerieInfo = async (serieId: number, seasonsQuantity: number) => {
  console.log(serieId, seasonsQuantity)
  let res = await grq(`/tv/${serieId}`, true, true, true)
  res.seasonsData = [] as TvSeason[]

  if (seasonsQuantity > 0) {
    for (let i = 1; i <= seasonsQuantity; i++) {
      let sInfo = await grq(`/tv/${serieId}/season/${i}`)
      res.seasonsData.push(sInfo as TvSeason)
    }
  }

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
    parseMediaListToUtilList(tvOnTheAir, 'tv', 'Na TV') // movies and seasons
  ]
}


const get = {
  all: getAll,
  allMovies: getAllMovies,
  trendingMovies: () => grq('/movie/top_rated'),
  details: getMediaDetails,
  fullMediaInfo: getFullMediaInfo,
  seasonInfo: getSeasonInfo,
  serieInfo: getSerieInfo,
  genres: getGenres
}

export default {
  get
}