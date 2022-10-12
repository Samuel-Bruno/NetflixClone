import React from 'react'
import * as S from './styles'
import { Episode } from '../../types/TvSeason'

import { Link } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../assets/svgs/play.svg'

type Props = {
  episode: Episode
}


function EpisodeItem({ episode }: Props) {


  return (
    <S.Box>
      <Link to={''}>
        <S.Container>
          <S.Number>{episode.episode_number}</S.Number>
          <S.Picture bgImg={episode.still_path} className='epImg'>
            <S.PlayIconArea className='playIconArea'>
              <PlayIcon width={24} />
            </S.PlayIconArea>
          </S.Picture>
          <S.Info>
            <S.EpisodeTitle>{episode.name}</S.EpisodeTitle>
            <S.EpisodeOverview>{episode.overview}</S.EpisodeOverview>
          </S.Info>
        </S.Container>
      </Link>
    </S.Box>
  )

}

export default EpisodeItem
