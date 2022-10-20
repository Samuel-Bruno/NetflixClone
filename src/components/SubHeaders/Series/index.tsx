import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'

import { ReactComponent as ListModeIcon } from '../../../assets/svgs/list_mode.svg'
import { ReactComponent as GridModeIcon } from '../../../assets/svgs/grid_mode.svg'
import { Link } from 'react-router-dom'
import { TvCategories } from '../../../api/TmdbCategoriesNames'


function SeriesSubHeader() {

  const headerEl = useRef<HTMLDivElement | null>(null)
  const [showingCategories, setShowingCategories] = useState(false)
  const [displayMode, setDisplayMode] = useState<'list' | 'grid'>('list')

  useEffect(() => {
    window.onscroll = () => {
      const el = headerEl.current
      if (el) {

        if (window.scrollY > 68) {
          el.classList.add('sticky')
        } else {
          el.classList.remove('sticky')
        }
      }
    }
  })


  return (
    <S.Wrapper ref={headerEl}>
      <S.PreContainer>
        <S.Container>
          <S.Left>
            <S.Title>Séries</S.Title>
            <S.FilterSeriesArea>
              <S.FilterBtn onClick={() => setShowingCategories(!showingCategories)}>
                Gêneros
              </S.FilterBtn>
              <S.FiltersItems showing={showingCategories}>
                {TvCategories.map((c, k) => (
                  <Link to={`${c.id}`} key={k}>{c.title}</Link>
                ))}
              </S.FiltersItems>
            </S.FilterSeriesArea>
          </S.Left>
          <S.Right>
            <S.DisplayModeToggle>
              <S.ListMode className={displayMode === 'list' ? 'active' : ''}
                onClick={() => setDisplayMode('list')}
              >
                <ListModeIcon width={20} height={18} />
              </S.ListMode>
              <S.GridMode className={displayMode === 'grid' ? 'active' : ''}
                onClick={() => setDisplayMode('grid')}
              >
                <GridModeIcon width={20} height={14} />
              </S.GridMode>
            </S.DisplayModeToggle>
          </S.Right>
        </S.Container>
      </S.PreContainer>
    </S.Wrapper>
  )

}

export default SeriesSubHeader