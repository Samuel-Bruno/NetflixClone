import React from 'react'

import * as S from './styles'

import SignInHeader from '../../components/_headers/SignIn'
import SignInForm from '../../components/_forms/SignIn'


function SignInPage() {


  return (
    <S.Page>
      <S.PageContainer>
        <SignInHeader />
        <SignInForm />
        {/* footer */}
      </S.PageContainer>
    </S.Page>
  )

}

export default SignInPage