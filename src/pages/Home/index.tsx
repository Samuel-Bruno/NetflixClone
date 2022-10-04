import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Api from '../../api'
import { Movie } from '../../types/movie'

import HomeHeader from '../../components/_headers/Home'

import { ReactComponent as WatchIcon } from '../../assets/svgs/play.svg'
import { ReactComponent as InfoIcon } from '../../assets/svgs/info.svg'
import { Link } from 'react-router-dom'
import ListObjType from '../../types/ListObjType'
import ListAllType from '../../types/listAll'
import MediaItem from '../../components/MediaItem'


function HomePage() {

  const [transparentBg, setTransparentBg] = useState(true)
  const [highlightMovie, setHighlightMovie] = useState<null | Movie>(null)
  const [listAll, setListAll] = useState<ListAllType[]>([])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTransparentBg(!(window.scrollY > 32))
    })

    const fetchData = async () => {
      const movies = await Api.get.trendingMovies()
      const all = await Api.get.all()
      console.log(all)

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
      <S.CategoriesArea>
        {listAll.map((ctg, k) => (
          <S.CtgRow key={k}>
            <S.CtgTitle>{ctg.name}</S.CtgTitle>
            <S.ItemsArea>
              {ctg.results.map((item, k) => (
                <MediaItem type={ctg.type} item={item} key={k} />
              ))}
            </S.ItemsArea>
          </S.CtgRow>
        ))}
      </S.CategoriesArea>
    </S.Page>
  )
}


export default HomePage