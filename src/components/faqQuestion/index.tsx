import React from 'react'
import { ReactComponent as FaqPlusIcon } from '../../assets/svgs/faq_plus.svg'

import S from './styles.module.css'

type Props = {
  title: string;
  answer: string;
}


function FaqQuestion({ title, answer }: Props) {


  return (
    <li className={S.question}>
      <div className={S.qTop}>
        <span className={S.qTitle}>{title}</span>
        <FaqPlusIcon width={28} height={28} fill="#FFF" />
      </div>
      <div className={S.qAnswer}>
        <span>{answer}</span>
      </div>
    </li>
  )

}

export default FaqQuestion