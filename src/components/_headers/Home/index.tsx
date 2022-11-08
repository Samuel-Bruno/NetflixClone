import React, { useEffect, useState } from 'react'
import * as S from './styles'

import { Link } from 'react-router-dom'
import BrowseMenuItem from '../../BrowseMenuItem'
import NotificationItem from '../../NotificationItem'
import UserOptionsProfileItem from '../../UserOptionsIProfileItem'

import { ReactComponent as BrandLogo } from '../../../assets/svgs/brand_logo.svg'
import { ReactComponent as SearchIcon } from '../../../assets/svgs/search.svg'
import { ReactComponent as BellIcon } from '../../../assets/svgs/bell.svg'
import { ReactComponent as PencilIcon } from '../../../assets/svgs/pencil_edit.svg'
import { ReactComponent as AccountIcon } from '../../../assets/svgs/default_account.svg'
import { ReactComponent as InfoIcon } from '../../../assets/svgs/help_center.svg'

type Props = {
  transparentBg: boolean;
}


function HomeHeader({ transparentBg }: Props) {

  const [searchBoxOpened, setSearchBoxOpened] = useState(false)

  useEffect(() => {
    const searchInput = document.getElementById('searchInput')
    const searchIconArea = searchInput?.previousElementSibling

    document.addEventListener('click', (e) => {
      if (
        e.target !== searchInput &&
        e.target !== searchIconArea &&
        e.target !== searchInput?.parentElement
      ) {
        setSearchBoxOpened(false)
      }
    })
  }, [])


  return (
    <S.Wrapper transparentBg={transparentBg}>
      <S.Container>
        <Link to={'/browse'}>
          <BrandLogo fill={'#E50914'} />
        </Link>
        <S.Nav>
          <S.Menu>
            <BrowseMenuItem title={'Início'} linkTo={`/browse`} active={true} />
            <BrowseMenuItem title={'Séries'} linkTo={`genre/${83}`} active={false} />
            <BrowseMenuItem title={'Filmes'} linkTo={`genre/${34399}`} active={false} />
            <BrowseMenuItem title={'Bombando'} linkTo={`latest`} active={false} />
            <BrowseMenuItem title={'Minha lista'} linkTo={`/browse`} active={false} />
            <BrowseMenuItem title={'Navegar por idiomas'} linkTo={`/browse`} active={false} />
          </S.Menu>
        </S.Nav>
        <S.RightMenu>
          <S.SearchBox opened={searchBoxOpened}
            onClick={(e) => {
              const hasId = e.currentTarget.getAttribute('id') === 'searchInput'
              if (hasId === false) setSearchBoxOpened(true)
            }}
          >
            <S.SearchBoxIconArea>
              <SearchIcon fill={'white'} />
            </S.SearchBoxIconArea>
            <S.SearchInput
              placeholder='Títulos, gente e gêneros'
              id={'searchInput'}
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
            <S.UserContentArea id={'userOptionsArea'}>
              <S.UserMainOptions>
                <UserOptionsProfileItem
                  imgSrc={'https://occ-0-4819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdcxMzRQIm7B1VbSEQ6Gzbh547sBcWOewiM6BYM1RpDbqtkb-Wt_r9tEQuiI216ZlFv7tGdvn5nnY2CCYIM-TtPu_uhOVK4.png?r=e6c'}
                  profileName={'Some other user'}
                  imageUse={true}
                />
                <UserOptionsProfileItem
                  imgSrc={'https://occ-0-4819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdcxMzRQIm7B1VbSEQ6Gzbh547sBcWOewiM6BYM1RpDbqtkb-Wt_r9tEQuiI216ZlFv7tGdvn5nnY2CCYIM-TtPu_uhOVK4.png?r=e6c'}
                  profileName={'Some other user'}
                  imageUse={true}
                />
                <UserOptionsProfileItem
                  imgSrc={'https://occ-0-4819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdcxMzRQIm7B1VbSEQ6Gzbh547sBcWOewiM6BYM1RpDbqtkb-Wt_r9tEQuiI216ZlFv7tGdvn5nnY2CCYIM-TtPu_uhOVK4.png?r=e6c'}
                  profileName={'Some other user'}
                  imageUse={true}
                />
                <UserOptionsProfileItem
                  imgSrc={'https://occ-0-4819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdcxMzRQIm7B1VbSEQ6Gzbh547sBcWOewiM6BYM1RpDbqtkb-Wt_r9tEQuiI216ZlFv7tGdvn5nnY2CCYIM-TtPu_uhOVK4.png?r=e6c'}
                  profileName={'Some other user'}
                  imageUse={true}
                />
                <UserOptionsProfileItem
                  svg={<PencilIcon fill={'#b3b3b3'} width={30} />}
                  itemTitle={'Gerenciar perfis'}
                  imageUse={false}
                />
                <UserOptionsProfileItem
                  svg={<AccountIcon fill={'#b3b3b3'} width={30} />}
                  itemTitle={'Conta'}
                  imageUse={false}
                />
                <UserOptionsProfileItem
                  svg={<InfoIcon fill={'#b3b3b3'} width={30} />}
                  itemTitle={'Central de Ajuda'}
                  imageUse={false}
                />
              </S.UserMainOptions>
              <S.SignOutBtn>
                <Link to={'/SignOut'}>Sair da Netflix</Link>
              </S.SignOutBtn>
            </S.UserContentArea>
          </S.UserArea>
        </S.RightMenu>
      </S.Container>
    </S.Wrapper>
  )

}

export default HomeHeader
