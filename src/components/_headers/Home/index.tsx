import React from 'react'
import * as S from './styles'

import { Link } from 'react-router-dom'
import BrowseMenuItem from '../../BrowseMenuItem'

import { ReactComponent as BrandLogo } from '../../../assets/svgs/brandLogo.svg'
import { ReactComponent as SearchIcon } from '../../../assets/svgs/search.svg'
import { ReactComponent as BellIcon } from '../../../assets/svgs/bell.svg'
import NotificationItem from '../../NotificationItem'


function HomeHeader() {


  return (
    <S.Wrapper transparentBg={true}>
      <S.Container>
        <Link to={'/browse'}>
          <BrandLogo fill={'#E50914'} />
        </Link>
        <S.Nav>
          <S.Menu>
            <BrowseMenuItem title={'Início'} linkTo={`/browse`} active={true} />
            <BrowseMenuItem title={'Séries'} linkTo={`genre/${1}`} active={false} />
            <BrowseMenuItem title={'Filmes'} linkTo={`genre/${1}`} active={false} />
            <BrowseMenuItem title={'Bombando'} linkTo={`latest`} active={false} />
            <BrowseMenuItem title={'Minha lista'} linkTo={`my-list`} active={false} />
            <BrowseMenuItem title={'Navegar por idiomas'} linkTo={`original-audio`} active={false} />
          </S.Menu>
        </S.Nav>
        <S.RightMenu>
          <S.SearchBox opened={false}>
            <S.SearchBoxIconArea>
              <SearchIcon fill={'white'} />
            </S.SearchBoxIconArea>
            <S.SearchInput
              placeholder='Títulos, gente e gêneros'
            />
          </S.SearchBox>
          <Link to={'/Kids'} id={'toKids'}>Infantil</Link>
          <S.BellArea>
            <S.BellIconArea>
              <BellIcon fill={'white'} />
            </S.BellIconArea>
            <S.BellContentArea id={'notificationsArea'}>
              <NotificationItem
                imgSrc={'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABXS7OfW0QH3c-5fMk90ydT28MCXxUvysJdXe1puk7P1TCW35kTOpujD0M936pX-muQDHDMUh5tnavO-2KDMP6STQkmTbJUoFXqBZIDKZYdKsjO4oHns95uiivUKlt7pce6psuZDRKkteicM.jpg?r=40c'}
                type={'Novidade'}
                title={'Fim da Estrada'}
                when={'há 2 semanas'}
              />
            </S.BellContentArea>
          </S.BellArea>
          <S.UserArea>
            <S.UserProfileArea>
              <S.UserProfilePhoto src={'https://occ-0-4819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdcxMzRQIm7B1VbSEQ6Gzbh547sBcWOewiM6BYM1RpDbqtkb-Wt_r9tEQuiI216ZlFv7tGdvn5nnY2CCYIM-TtPu_uhOVK4.png?r=e6c'} />
              <S.DropDownArrow id={'dropdownArrow'} />
            </S.UserProfileArea>
            {/* profiles list */}
            {/* manage profiles */}
            {/* account */}
            {/* help center */}
            {/* --- sign out --- */}
          </S.UserArea>
        </S.RightMenu>
      </S.Container>
    </S.Wrapper>
  )

}

export default HomeHeader
