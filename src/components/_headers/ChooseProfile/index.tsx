import React from 'react'
import * as S from './styles'

import { ReactComponent as BrandLogo } from '../../../assets/svgs/brandLogo.svg'


function ChooseProfilePage() {


  return (
    <S.Wrapper>
      <S.Container>
        <BrandLogo fill={'#E50914'} />
      </S.Container>
    </S.Wrapper>
  )

}

export default ChooseProfilePage