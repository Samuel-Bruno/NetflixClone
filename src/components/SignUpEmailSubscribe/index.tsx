import React from 'react'
import S from './styles.module.css'

import { ReactComponent as SubscribeBtnArrow } from '../../assets/svgs/signInArrow.svg'


function SignUpEmailSubscribe() {


  return (
    <>
      <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
      <div className={S.subscribeArea}>
        <div className={S.inputArea}>
          <input type="email" name="email" className={S.subscribeInput} placeholder=" " />
          <label className={S.inputLabel}>Email</label>
          <div className={S.inputError}>
            <span>O email é obrigatório</span>
          </div>
        </div>
        <button className={S.subscribeBtn}>
          <span>Vamos lá</span>
          <SubscribeBtnArrow width={20} height={20} fill="#FFF" />
        </button>
      </div>
    </>
  )

}

export default SignUpEmailSubscribe