import React from 'react'
import * as S from './styles'

import { ReactComponent as BrandLogo } from '../../../assets/svgs/brandLogo.svg'
import { Link } from 'react-router-dom'


function SignInHeader() {


  return (
    <S.Wrapper>
      <S.Box>
        <Link to={'/'}>
          <BrandLogo fill={'#E50914'} />
        </Link>
      </S.Box>
    </S.Wrapper>
  )

}

export default SignInHeader