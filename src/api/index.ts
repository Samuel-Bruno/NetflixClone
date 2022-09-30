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

const get = {
  allMovies: getAllMovies,
  trendingMovies: grq('/movie/top_rated')
}

export default {
  get
}