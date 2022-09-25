import React from 'react'
import * as S from './styles'

import { ReactComponent as SubscribeBtnArrow } from '../../assets/svgs/signInArrow.svg'


function SignUpEmailSubscribe() {


  return (
    <>
      <S.Title>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</S.Title>
      <S.SubscribeArea>
        <S.InputArea>
          <S.SubscribeInput type="email" name="email" placeholder=" " />
          <S.InputLabel>Email</S.InputLabel>
          <S.InputError>
            <span>O email é obrigatório</span>
          </S.InputError>
        </S.InputArea>
        <S.SubscribeBtn>
          <span>Vamos lá</span>
          <SubscribeBtnArrow width={20} height={20} fill="#FFF" />
        </S.SubscribeBtn>
      </S.SubscribeArea>
    </>
  )

}

export default SignUpEmailSubscribe