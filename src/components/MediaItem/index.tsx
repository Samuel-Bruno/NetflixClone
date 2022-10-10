import React from 'react'
import * as S from './styles'
import { getImgUrl } from "../../api/TmdbConfig"
import { Movie } from '../../types/movie'
import { TVListResult as Tv } from '../../types/Tv'
import { moviesCategories, TvCategories } from '../../api/TmdbCategoriesNames'

import { Link } from 'react-router-dom'

import { ReactComponent as PlayIcon } from '../../assets/svgs/play.svg'
import { ReactComponent as MyListIcon } from '../../assets/svgs/add_my_list.svg'
import { ReactComponent as DislikeIcon } from '../../assets/svgs/dislike.svg'
import { ReactComponent as LikeIcon } from '../../assets/svgs/like.svg'
import { ReactComponent as DoubleLikeIcon } from '../../assets/svgs/double_like.svg'
import { ReactComponent as MoreInfoIcon } from '../../assets/svgs/more_info.svg'

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
      <S.BoxContent className='boxContent'>
        <S.CoverArea src={`${getImgUrl}/w342${item.poster_path}`} />
        <S.OpenedOneArea>
          <S.BtnsArea>
            <S.ActionsArea>
              <Link to={'/'} className={'playMediaLink'}>
                <PlayIcon fill={'black'} width={16} />
              </Link>
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
            </S.ActionsArea>
            <S.MoreInfo>
              <MoreInfoIcon fill={'#888'} width={16} />
            </S.MoreInfo>
          </S.BtnsArea>
          <S.MediaInfo>
            <S.MediaVoteAverage>{item.vote_average * 10}% relevante</S.MediaVoteAverage>
            <S.MediaOverview>
              {item.overview &&
                <span>Sinopse:</span>
              }
              <div className="overviewText">{item.overview}</div>
            </S.MediaOverview>
            <S.MediaCategories>
              {item.genre_ids.map((c, k) =>
                <S.MediaCategory key={k}>
                  <span className='categoryBall'>&bull;</span>
                  <span className='categoryTitle'>{moviesCategories.find(i => i.id === c)?.title}</span>
                </S.MediaCategory>
              )}
            </S.MediaCategories>
          </S.MediaInfo>
        </S.OpenedOneArea>
      </S.BoxContent>
    </S.Box>
  ) : (
    <S.Box>
      <S.BoxContent>
        <S.CoverArea src={`${getImgUrl}/w342${item.poster_path}` as string} />
        <S.OpenedOneArea>
          <S.BtnsArea>
            <S.ActionsArea>
              <Link to={'/'} className={'playMediaLink'}>
                <PlayIcon fill={'black'} width={16} />
              </Link>
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
            </S.ActionsArea>
            <S.MoreInfo>
              <MoreInfoIcon fill={'#888'} width={16} />
            </S.MoreInfo>
          </S.BtnsArea>
          <S.MediaInfo>
            <S.MediaVoteAverage>{item.vote_average * 10}% relevante</S.MediaVoteAverage>
            <S.MediaOverview>
              {item.overview &&
                <span>Sinopse:</span>
              }
              <div className="overviewText">{item.overview}</div>
            </S.MediaOverview>
            <S.MediaCategories>
              {item.genre_ids.map((c, k) => (k < 3) ?
                <S.MediaCategory key={k}>
                  <span className='categoryBall'>&bull;</span>
                  <span className='categoryTitle'>{TvCategories.find(i => i.id === parseInt(c))?.title}</span>
                </S.MediaCategory> : null
              )}
            </S.MediaCategories>
          </S.MediaInfo>
        </S.OpenedOneArea>
      </S.BoxContent>
    </S.Box>
  )

}

export default MediaItem