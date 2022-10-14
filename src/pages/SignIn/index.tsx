import React from 'react'
import * as S from './styles'

import SignInHeader from '../../components/_headers/SignIn'
import SignInForm from '../../components/_forms/SignIn'
import SignInFooter from '../../components/_footers/SignIn'


function SignInPage() {


  return (
    <S.Page>
      <S.PageContainer>
        <SignInHeader />
        <SignInForm />
        <SignInFooter />
      </S.PageContainer>
    </S.Page>
  )

}

export default SignInPage