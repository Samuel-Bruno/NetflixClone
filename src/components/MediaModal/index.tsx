import React, { useEffect } from 'react'
import * as S from './styles'
import { Movie } from '../../types/movie'
import { TVListResult as Tv } from '../../types/Tv'

import { Link } from 'react-router-dom'

import { ReactComponent as WatchIcon } from '../../assets/svgs/play.svg'
import { ReactComponent as MyListIcon } from '../../assets/svgs/add_my_list.svg'
import { ReactComponent as DislikeIcon } from '../../assets/svgs/dislike.svg'
import { ReactComponent as LikeIcon } from '../../assets/svgs/like.svg'
import { ReactComponent as DoubleLikeIcon } from '../../assets/svgs/double_like.svg'

type Props = {
  type: 'movie',
  item: Movie
} | {
  type: 'tv',
  item: Tv
}


function MediaModal({ type, item }: Props) {


  return (
    <S.Wrapper>
      <S.ModalContainer>
        <S.Top>
          <S.Backdrop backdropUrl={item.backdrop_path}>
            <S.BtnsArea>
              <S.MediaBtn>
                <Link to={'/'}>
                  <WatchIcon width={30} />
                  <span>Assistir</span>
                </Link>
              </S.MediaBtn>
              <Link to={'/'} className={'addMyList'}>
                <MyListIcon fill={'#888'} width={16} />
              </Link>
              <S.RateArea>
                <S.RateAreaIcon className={'rateAreaIcon'}>
                  <LikeIcon fill={'#888'} />
                </S.RateAreaIcon>
                <S.RateOptions>
                  <Link to={'/'} className={'rateOption dislikeIt'}>
                    <DislikeIcon fill={'#888'} />
                  </Link>
                  <Link to={'/'} className={'rateOption likeIt'}>
                    <LikeIcon fill={'#888'} />
                  </Link>
                  <Link to={'/'} className={'rateOption loveIt'}>
                    <DoubleLikeIcon fill={'#888'} />
                  </Link>
                </S.RateOptions>
              </S.RateArea>
            </S.BtnsArea>
          </S.Backdrop>
        </S.Top>
        <S.MediaInfo>
          <S.MediaData></S.MediaData>
          <S.MediaCast></S.MediaCast>
        </S.MediaInfo>
        <S.MediaEpisodes></S.MediaEpisodes> {/* if exists (or if can get) */}
        <S.Sugestions></S.Sugestions>
        <S.MediaTrailers></S.MediaTrailers> {/* if exists (or if can get) */}
        <S.MediaAbout></S.MediaAbout>       {/* if exists (or if can get) */}
      </S.ModalContainer>
    </S.Wrapper>
  )

}

export default MediaModal
