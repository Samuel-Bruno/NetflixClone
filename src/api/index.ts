import parseMediaListToUtilList from '../utils/parseMediaListToUtilList'
import { BASE_TMDB_URL as BaseUrl, API_TOKEN } from './TmdbConfig'


const grq = async (endpoint: string) => {
  const params = `?language=pt-br`
  const req = await fetch(`${BaseUrl}${endpoint}${params}`, {
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
    parseMediaListToUtilList(tvOnTheAir, 'tv', 'Passando na TV')
  ]
}


const get = {
  all: getAll,
  allMovies: getAllMovies,
  trendingMovies: () => grq('/movie/top_rated')
}

export default {
  get
}