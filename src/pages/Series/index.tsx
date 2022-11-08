import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { SerieInfo } from '../../types/api/SerieInfo'
import { HandleSelectMediaProps } from '../../types/handleSelectMedia'
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
import SubHeader from '../../components/SubHeaders'
import { DetailedMedia } from '../../types/api/getDetailedMedia'


function SeriesPage() {

  const [transparentBg, setTransparentBg] = useState(true)
  const [highlightSerie, setHighlightSerie] = useState<null | DetailedMedia>(null)
  const [listAll, setListAll] = useState<ListAllType[]>([])
  const [showingModal, setShowingModal] = useState(false)
  const [selectedToModal, setSelectedToModal] = useState<null |
  { type: 'movie', item: MovieInfo } |
  { type: 'tv', item: SerieInfo }
  >(null)

  const handleSelectMedia = async ({ type, item }: HandleSelectMediaProps) => {

    if (type === 'movie') {
      let detailedMedia = await Api.get.movieInfo(item.id)

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
      const all = await Api.get.allSeries()

      setHighlightSerie(all.highlight)
      setListAll(all.categories)
    }
    fetchData()
  }, [setHighlightSerie])


  return (
    <S.Page>
      <MediaFiltersHeader transparentBg={transparentBg} activeMenu={'series'} />
      <SubHeader page={'series'} />
      <S.HighLightMovie backdropUrl={highlightSerie ? highlightSerie.backdrop_path : null}>
        <S.MediaInfo>
          <S.MediaTitle>{highlightSerie?.name}</S.MediaTitle>
          <S.MediaInterestingData>
            <S.RateMedia>{(highlightSerie?.vote_average.toFixed(1))} pontos</S.RateMedia>
            <S.MediaYear>
              {new Date(highlightSerie?.first_air_date as string).getFullYear()}
            </S.MediaYear>
            {highlightSerie?.number_of_seasons &&
              <S.MediaSeasons>
                {`${highlightSerie.number_of_seasons} temporada${highlightSerie.number_of_seasons > 1 ? 's' : ''}`}
              </S.MediaSeasons>
            }
          </S.MediaInterestingData>
          <S.MediaOverview>{highlightSerie?.overview}</S.MediaOverview>
          <S.ButtonsArea>
            <S.MediaBtn btnFor='watch'>
              <Link to={'/'}>
                <WatchIcon width={30} />
                <span>Assistir</span>
              </Link>
            </S.MediaBtn>
            <S.MediaBtn btnFor='info' onClick={() => handleSelectMedia({
              type: 'tv', item: highlightSerie as DetailedMedia
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