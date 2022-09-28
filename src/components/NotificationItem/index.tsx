import React from 'react'
import * as S from './styles'

type Props = {
  imgSrc: string;
  type: string;
  title: string;
  when: string;
}


function NotificationItem({ imgSrc, type, title, when }: Props) {


  return (
    <S.Box>
      <S.NotImage src={imgSrc} alt="" />
      <S.NotInfo>
        <S.NotTitle>{type}<br/>{title}</S.NotTitle>
        <S.NotDate>{when}</S.NotDate>
      </S.NotInfo>
    </S.Box>
  )

}

export default NotificationItem