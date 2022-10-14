import React from 'react'
import * as S from './styles'

import { Link } from 'react-router-dom'
import ChooseProfileHeader from '../../components/_headers/ChooseProfile'
import ProfileBox from '../../components/ProfileBox'


function ChooseProfilePage() {


  return (
    <S.Page>
      <ChooseProfileHeader />
      <S.Container>
        <S.Title>Quem está assistindo?</S.Title>
        <S.ProfilesArea>
          <ProfileBox
            profileName={'Child'}
            imageUrl={'https://occ-0-4819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd3xlDoaNguVYl5gLu9bHYyQYyTl9sc84qe8jo9sb74r_yfHy4J9hb4FBF_tB4pexRJmxZJYx_hLsR259HLvUWIV4jQDOKJGEyq9uerDiwHq-Hmph8aPe9YnLyEQrL7Bj5gTCHif7J_U1yNQ4Dg.png?r=64f'}
          />
          <ProfileBox
            profileName={'Darth Vader'}
            imageUrl={'https://occ-0-4819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABagGAHKoyZbPio8gSFdmmckmw-pubb0nITvsn6QG3GGbyXkR_8mSkjVxdYShZhTq73n419DTRZA02uI6MeVj6vw-9Zeq-zz0gElR.png?r=97b'}
          />
          <ProfileBox
            profileName={'Monkey'}
            imageUrl={'https://occ-0-4819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABe67usDrFCN4Ntk-n_LKNwhJxvQkZf95_L-Sj-QFJ8kqTdWgH9hjmKtEdehX2PRLV7tUm9JGfi9U9SvByCeg8dDumU91qHdLbEGm.png?r=e6c'}
          />
        </S.ProfilesArea>
        <S.ManageProfilesBtn>
          <Link to={'/'}>Gerenciar perfis</Link>
        </S.ManageProfilesBtn>
      </S.Container>
    </S.Page>
  )

}

export default ChooseProfilePage