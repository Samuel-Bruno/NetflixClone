import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'


function SignInForm() {


  return (
    <S.Box>
      <S.FormTitle>Entrar</S.FormTitle>
      <S.FormArea>
        <S.InputsArea>
          <S.InputArea>
            <S.Input type="email" name="email" placeholder=" " />
            <S.InputLabel>Email ou número de telefone</S.InputLabel>
            <S.InputError showing={false}>
              <span>Informe um email ou número de telefone válido.</span>
            </S.InputError>
          </S.InputArea>
          <S.InputArea>
            <S.Input type="pass" name="pass" placeholder=" " />
            <S.InputLabel>Senha</S.InputLabel>
            <S.InputError showing={false}>
              <span>A senha deve ter entre 4 e 60 caracteres.</span>
            </S.InputError>
          </S.InputArea>
        </S.InputsArea>
        <S.SignInBtn>
          <Link to={'/browse'}>Entrar</Link>
        </S.SignInBtn>
        <S.FormOptions>
          <S.RememberCheckbox type={'checkbox'} value={'Lembre-se de mim'} id={'remember_checkbx'} />
          <S.RememberLabel htmlFor={'remember_checkbx'}>
            <span>Lembre-se de mim</span>
          </S.RememberLabel>
          <Link to={'/login'}>Precisa de ajuda?</Link>
        </S.FormOptions>
      </S.FormArea>
      <S.OtherLinksArea>
        <S.SignNowArea>Novo por aqui? <Link to={'/'}>Assine agora.</Link></S.SignNowArea>
        <S.CaptchaArea>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <Link to={'/login'}>Saiba mais.</Link>
        </S.CaptchaArea>
      </S.OtherLinksArea>
    </S.Box>
  )

}

export default SignInForm