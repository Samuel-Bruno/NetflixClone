import React from 'react'
import * as S from './styles'
import { Sugestion as SerieType } from '../../types/TvSugestions'
import { getImgUrl } from "../../api/TmdbConfig"

import { ReactComponent as MyListIcon } from '../../assets/svgs/add_my_list.svg'
import { Link } from 'react-router-dom'
import { MovieSugestion } from '../../types/Movie/BasicSugestion'

type Props = {
  type: 'movie';
  info: MovieSugestion;
} | {
  type: 'tv';
  info: SerieType;
}


function Sugestion({ type, info }: Props) {


  return (type === 'movie') ? (
    <S.Box>
      <S.ImageArea>
        <img src={`${getImgUrl}/w300${info.poster_path}`} alt="" />
      </S.ImageArea>
      <S.MainInfo>
        <S.MainInfoTop>
          <S.MainInfoLeft>
            <S.Rate>{(info.vote_average * 10).toFixed(0)}% relevante</S.Rate>
            <S.Year>{new Date(info.release_date).getFullYear()}</S.Year>
          </S.MainInfoLeft>
          <S.AddMyList>
            <Link to={'/'} className={'addMyList'}>
              <MyListIcon width={20} />
            </Link>
          </S.AddMyList>
        </S.MainInfoTop>
        <S.Overview>
          <span>{info.overview}</span>
        </S.Overview>
      </S.MainInfo>
    </S.Box>
  ) : (
    <S.Box>
      <S.ImageArea>
        <img src={`${getImgUrl}/w300${info.poster_path}`} alt="" />
      </S.ImageArea>
      <S.MainInfo>
        <S.MainInfoTop>
          <S.MainInfoLeft>
            <S.Rate>{(info.vote_average * 10).toFixed(0)}% relevante</S.Rate>
            <S.EpisodesOrDuration>
              {
                `${info.number_of_seasons > 1 ?
                  `${info.number_of_seasons} temporadas` :
                  `${info.number_of_seasons} temporada`
                }`
              }
            </S.EpisodesOrDuration>
            <S.Year>{new Date(info.first_air_date).getFullYear()}</S.Year>
          </S.MainInfoLeft>
          <S.AddMyList>
            <Link to={'/'} className={'addMyList'}>
              <MyListIcon width={20} />
            </Link>
          </S.AddMyList>
        </S.MainInfoTop>
        <S.Overview>
          <span>{info.overview}</span>
        </S.Overview>
      </S.MainInfo>
    </S.Box>
  )

}

export default Sugestion