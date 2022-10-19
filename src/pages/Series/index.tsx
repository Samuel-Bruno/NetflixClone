import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { SerieInfo } from '../../types/api/SerieInfo'
import { HandleSelectMediaProps } from '../../types/handleSelectMedia'
import { Movie } from '../../types/movie'
import ListAllType from '../../types/listAll'
import { MovieInfo } from '../../types/Movie/MovieInfo'
import Api from '../../api'
import { toggleBodyScroll } from '../../utils/toggleBodyScroll'

import MediaFiltersHeader from '../../components/_headers/MediaFilters'
import { Link } from 'react-router-dom'
import MediaModal from '../../components/MediaModal'
import CtgRow from '../../components/CtgRow'
import MainFooter from '../../components/_footers/Main'

import { ReactComponent as WatchIcon } from '../../assets/svgs/play.svg'
import { ReactComponent as InfoIcon } from '../../assets/svgs/info.svg'


function SeriesPage() {

  const [transparentBg, setTransparentBg] = useState(true)
  const [highlightMovie, setHighlightMovie] = useState<null | Movie>(null)
  const [listAll, setListAll] = useState<ListAllType[]>([])
  const [showingModal, setShowingModal] = useState(false)
  const [selectedToModal, setSelectedToModal] = useState<null |
  { type: 'movie', item: MovieInfo } |
  { type: 'tv', item: SerieInfo }
  >(null)

  const handleSelectMedia = async ({ type, item }: HandleSelectMediaProps) => {

    if (type === 'movie') {
      let detailedMedia = await Api.get.movieInfo(item.id)

      console.log(detailedMedia)

      toggleBodyScroll()
      setSelectedToModal({ type: 'movie', item: detailedMedia })
      setShowingModal(true)
    } else if (type === 'tv') {
      let detailedMedia = await Api.get.details(type, item.id)
      let seasonInfo: SerieInfo = await Api.get.serieInfo(item.id, detailedMedia.seasons.length)

      toggleBodyScroll()
      setSelectedToModal({ type: 'tv', item: seasonInfo })
      setShowingModal(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => { setTransparentBg(!(window.scrollY > 32)) })

    const fetchData = async () => {
      const movies = await Api.get.trendingMovies()
      const all = await Api.get.all()

      setHighlightMovie(movies.results[
        Math.ceil(Math.random() * movies.results.length - 1)
      ])
      setListAll(all)
    }
    fetchData()
  }, [setHighlightMovie])


  return (
    <S.Page>
      <MediaFiltersHeader transparentBg={transparentBg} activeMenu={'series'} />
      <S.HighLightMovie backdropUrl={highlightMovie ? highlightMovie.backdrop_path : null}>
        <S.MediaInfo>
          <S.MediaTitle>{highlightMovie?.title}</S.MediaTitle>
          <S.MediaInterestingData>
            <S.RateMedia>{highlightMovie?.vote_average} pontos</S.RateMedia>
            <S.MediaYear>
              {new Date(highlightMovie?.release_date as string).getFullYear()}
            </S.MediaYear>
          </S.MediaInterestingData>
          <S.MediaOverview>{highlightMovie?.overview}</S.MediaOverview>
          <S.ButtonsArea>
            <S.MediaBtn btnFor='watch'>
              <Link to={'/'}>
                <WatchIcon width={30} />
                <span>Assistir</span>
              </Link>
            </S.MediaBtn>
            <S.MediaBtn btnFor='info' onClick={() => handleSelectMedia({
              type: 'movie', item: highlightMovie as Movie
            })}>
              <InfoIcon width={30} />
              <span>Mais informações</span>
            </S.MediaBtn>
          </S.ButtonsArea>
        </S.MediaInfo>
      </S.HighLightMovie>
      {selectedToModal && showingModal &&
        <MediaModal info={selectedToModal}
          toggleBodyScroll={toggleBodyScroll}
          setShowingModal={setShowingModal}
        />
      }
      <S.CategoriesArea>
        {listAll.map((ctg, k) => <CtgRow ctg={ctg} key={k} pickMediaFn={handleSelectMedia} />)}
      </S.CategoriesArea>
      <MainFooter />
    </S.Page>
  )

}

export default SeriesPage