import React from "react"
import * as S from './styles'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/svgs/brandLogo.svg'


function SignUpHeader() {


  return (
    <S.Wrapper>
      <S.Box>
        <Logo fill={'#E50914'} />
        <S.HeaderMenu>
          <S.SelectLanguageBox>
            <S.Select name="language" id="languageSelect">
              <S.Option value="pt-br" selected>Português</S.Option>
              <S.Option value="en-us">English</S.Option>
            </S.Select>
          </S.SelectLanguageBox>
          <S.SignInBtn>
            <Link to={'/login'}>Entrar</Link>
          </S.SignInBtn>
        </S.HeaderMenu>
      </S.Box>
    </S.Wrapper>
  )

}


export default SignUpHeader