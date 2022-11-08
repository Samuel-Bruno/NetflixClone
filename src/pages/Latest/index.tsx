import React, { useEffect, useState } from 'react'
import * as S from './styles'
import ListAllType from '../../types/listAll'
import { MovieInfo } from '../../types/Movie/MovieInfo'
import { SerieInfo } from '../../types/api/SerieInfo'
import { HandleSelectMediaProps } from '../../types/handleSelectMedia'
import { toggleBodyScroll } from '../../utils/toggleBodyScroll'
import Api from '../../api'

import MediaFiltersHeader from '../../components/_headers/MediaFilters'
import MediaModal from '../../components/MediaModal'
import CtgRow from '../../components/CtgRow'
import MainFooter from '../../components/_footers/Main'


function LatestPage() {


  const [transparentBg, setTransparentBg] = useState(true)
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
      const newMovies = await Api.get.newMovies()
      const topTenMovies = await Api.get.topTenMovies()
      const topTenSeries = await Api.get.topTenSeries()
      const upcomingMovies = await Api.get.upcomingMovies()

      const categories = [
        newMovies,
        topTenMovies,
        topTenSeries,
        upcomingMovies,
      ]

      setListAll(categories)
    }
    fetchData()
  }, [])


  return (
    <S.Page>
      <MediaFiltersHeader transparentBg={transparentBg} activeMenu={'latest'} />
      {selectedToModal && showingModal &&
        <MediaModal info={selectedToModal}
          toggleBodyScroll={toggleBodyScroll}
          setShowingModal={setShowingModal}
        />
      }
      <S.CategoriesArea>
        {listAll[0] ? <CtgRow ctg={listAll[0]} pickMediaFn={handleSelectMedia} /> : null}
        {listAll[1] ? <CtgRow ctg={listAll[1]} pickMediaFn={handleSelectMedia} topTen /> : null}
        {listAll[2] ? <CtgRow ctg={listAll[2]} pickMediaFn={handleSelectMedia} topTen /> : null}
        {listAll[3] ? <CtgRow ctg={listAll[3]} pickMediaFn={handleSelectMedia} /> : null}
      </S.CategoriesArea>
      <MainFooter />
    </S.Page >
  )

}


export default LatestPage