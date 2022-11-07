import React, { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { MoviesCategories } from '../../../api/TmdbCategoriesNames'

import { Link } from 'react-router-dom'

import { ReactComponent as ListModeIcon } from '../../../assets/svgs/list_mode.svg'
import { ReactComponent as GridModeIcon } from '../../../assets/svgs/grid_mode.svg'


function MoviesSubHeader() {

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
            <S.Title>Filmes</S.Title>
            <S.FilterSeriesArea>
              <S.FilterBtn onClick={() => setShowingCategories(!showingCategories)}>
                Gêneros
              </S.FilterBtn>
              <S.FiltersItems showing={showingCategories}>
                {MoviesCategories.map((c, k) => (
                  <Link to={``} key={k}>{c.title}</Link>
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

export default MoviesSubHeader