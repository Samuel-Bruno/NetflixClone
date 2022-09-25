import React from 'react'
import * as S from './styles'

import { ReactComponent as FaqPlusIcon } from '../../assets/svgs/faq_plus.svg'

type Props = {
  title: string;
  answer: string;
}


function FaqQuestion({ title, answer }: Props) {


  return (
    <S.Question>
      <S.QTop>
        <S.QTitle>{title}</S.QTitle>
        <FaqPlusIcon width={28} height={28} fill="#FFF" />
      </S.QTop>
      <S.QAnswer opened={false}>
        <span>{answer}</span>
      </S.QAnswer>
    </S.Question>
  )

}

export default FaqQuestion