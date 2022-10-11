import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { Movie } from '../../types/movie'
import { TVListResult as Tv } from '../../types/Tv'

import { Link } from 'react-router-dom'

import { ReactComponent as WatchIcon } from '../../assets/svgs/play.svg'
import { ReactComponent as MyListIcon } from '../../assets/svgs/add_my_list.svg'
import { ReactComponent as DislikeIcon } from '../../assets/svgs/dislike.svg'
import { ReactComponent as LikeIcon } from '../../assets/svgs/like.svg'
import { ReactComponent as DoubleLikeIcon } from '../../assets/svgs/double_like.svg'
import { TvSeason } from '../../types/TvSeason'
import { TvCategories } from '../../api/TmdbCategoriesNames'
import EpisodeItem from '../EpisodeItem'

type Props = {
  type: 'movie',
  item: Movie
} | {
  type: 'tv',
  item: TvSeason
}


function MediaModal({ type, item }: Props) {

  useEffect(() => {
    console.log("ITEM ON MODAL - ", item)
  }, [])

  const [showingSeason, setShowingSeason] = useState(1)


  return (type === 'movie') ? (
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
          <S.MediaData>
            <S.FirstRow></S.FirstRow>
          </S.MediaData>
          <S.MediaTags>.</S.MediaTags>
        </S.MediaInfo>
        <S.MediaEpisodes></S.MediaEpisodes> {/* if exists (or if can get) */}
        <S.Sugestions></S.Sugestions>
        <S.MediaTrailers></S.MediaTrailers> {/* if exists (or if can get) */}
        <S.MediaAbout></S.MediaAbout>       {/* if exists (or if can get) */}
      </S.ModalContainer>
    </S.Wrapper>
  ) : (
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
          <S.MediaData>
            <S.FirstRow>
              <span className='interestRate'>{(item.vote_average * 10).toFixed(0)}% relevante</span>
              <span className='releaseDate'>{new Date(item.last_air_date).getFullYear()}</span>
              <span className='seasonsQnt'>
                {`${item.number_of_seasons} temporada${item.number_of_seasons > 1 ? 's' : ''}`}
              </span>
            </S.FirstRow>
            <S.OverviewRow>{item.overview}</S.OverviewRow>
          </S.MediaData>
          <S.MediaTags>
            <div className='tagItem'>
              <span className='tagName'>Elenco: </span>
              <span className='castNames'>
                {item.credits.cast.map((p, k) => {
                  return (k < 7) ? `${p.original_name}${k > 6 || k < item.credits.cast.length ? '' : ', '} ` : ''
                })}
              </span>
            </div>
            <div className='tagItem'>
              <span className='tagName'>Gêneros: </span>
              <span className='castNames'>
                {item.genres.map((g, k) => {
                  return `${TvCategories.find(c => c.id === g.id)?.title}${k < item.genres.length - 1 ? ', ' : ''}`
                })}
              </span>
            </div>
          </S.MediaTags>
        </S.MediaInfo>
        <S.MediaEpisodes>
          <S.EpisodesTop>
            <span className='episodesTitle'>Episódios</span>
            {item.number_of_seasons > 1 &&
              'season select'
            }
            {item.number_of_seasons === 1 &&
              <span className='mediaTitleOnSelect'>{item.name}</span>
            }
          </S.EpisodesTop>
          <S.EpisodesList>
            {item.seasonsData.find(s => s.season_number === showingSeason)?.episodes.map((ep, k) =>
              <EpisodeItem episode={ep} key={k} />
            )}
          </S.EpisodesList>
        </S.MediaEpisodes> {/* if exists (or if can get) */}
        <S.Sugestions></S.Sugestions>
        <S.MediaTrailers></S.MediaTrailers> {/* if exists (or if can get) */}
        <S.MediaAbout></S.MediaAbout>       {/* if exists (or if can get) */}
      </S.ModalContainer>
    </S.Wrapper>
  )

}

export default MediaModal
