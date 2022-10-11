import React from 'react'
import * as S from './styles'
import { Episode } from '../../types/TvSeason'

type Props = {
  episode: Episode
}


function EpisodeItem({ episode }: Props) {


  return (
    <S.Box>{episode.name}</S.Box>
  )

}

export default EpisodeItem
