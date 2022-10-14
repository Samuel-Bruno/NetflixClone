import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Movie } from '../../types/movie'
import { TVListResult as Tv } from '../../types/Tv'
import ListAllType from '../../types/listAll'
import { TvSeason } from '../../types/TvSeason'
import Api from '../../api'

import { Link } from 'react-router-dom'
import HomeHeader from '../../components/_headers/Home'
import MediaModal from '../../components/MediaModal'
import CtgRow from '../../components/CtgRow'
import HomeFooter from '../../components/_footers/Home'

import { ReactComponent as WatchIcon } from '../../assets/svgs/play.svg'
import { ReactComponent as InfoIcon } from '../../assets/svgs/info.svg'


function HomePage() {

  const [transparentBg, setTransparentBg] = useState(true)
  const [highlightMovie, setHighlightMovie] = useState<null | Movie>(null)
  const [listAll, setListAll] = useState<ListAllType[]>([])
  const [selectedToModal, setSelectedToModal] = useState<
    null | { type: 'movie', item: Movie } | { type: 'tv', item: TvSeason }
  >(null)
  const [showingModal, setShowingModal] = useState(false)

  const handleSelectTvMedia = async (type: 'movie' | 'tv', item: Movie | Tv) => {
    let detailedMedia = await Api.get.details(type, item.id)
    if (type === 'tv') {
      let seasonInfo: TvSeason = await Api.get.serieInfo(item.id, detailedMedia.seasons.length)
      setSelectedToModal({ type: 'tv', item: seasonInfo })

      toggleBodyScroll()
      setShowingModal(true)
    }
  }

  const toggleBodyScroll = () => {
    window.document.body.classList.toggle('withOpenedModal')
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTransparentBg(!(window.scrollY > 32))
    })

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
    <S.Page backdropUrl={highlightMovie ? highlightMovie.backdrop_path : null}>
      <HomeHeader transparentBg={transparentBg} />
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
            <S.MediaBtn btnFor='info'>
              <InfoIcon width={30} />
              <span>Mais informações</span>
            </S.MediaBtn>
          </S.ButtonsArea>
        </S.MediaInfo>
      </S.HighLightMovie>
      {selectedToModal && showingModal &&
        <MediaModal type={'tv'}
          item={selectedToModal.item as TvSeason}
          toggleBodyScroll={toggleBodyScroll}
          setShowingModal={setShowingModal}
        />
      }
      <S.CategoriesArea>
        {listAll.map((ctg, k) => <CtgRow ctg={ctg} key={k} pickMediaFn={handleSelectTvMedia} />)}
      </S.CategoriesArea>
      <HomeFooter />
    </S.Page>
  )
}


export default HomePage