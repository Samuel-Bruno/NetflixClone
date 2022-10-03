import React from 'react'
import * as S from './styles'
import { getImgUrl } from "../../api/TmdbConfig"
import { Movie } from '../../types/movie'
import {TVListResult as Tv} from '../../types/Tv'

type Props = {
  type: 'movie',
  item: Movie
} | {
  type: 'tv',
  item: Tv
}


function MediaItem({ type, item }: Props) {


  return (type === 'movie') ? (
    <S.Box>
      <S.CoverArea src={`${getImgUrl}/w154${item.poster_path}`} />
    </S.Box>
  ) : (
    <S.Box>
      <S.CoverArea src={`${getImgUrl}/w154${item.poster_path}` as string} />
    </S.Box>
  )

}

export default MediaItem