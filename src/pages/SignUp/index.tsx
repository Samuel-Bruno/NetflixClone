import React from "react"
import S from './styles.module.css'

import SignUpHeader from "../../components/headers/signUp"
import { ReactComponent as SubscribeBtnArrow } from '../../assets/svgs/signInArrow.svg'


const SignUpPage = () => {


  return (
    <div className={S.page}>
      <section className={S.firstBrake}>
        <div className={S.firstBrakeWrapper}>
          <SignUpHeader />
          <div className={S.bannerCenter}>
            <h1>Filmes, séries e muito mais. Sem limites.</h1>
            <h2>Assista onde quiser. Cancele quando quiser.</h2>
            <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
            <div className={S.subscribeArea}>
              <div className={S.inputArea}>
                {/* <label>Email</label> */}
                <input type="email" name="email" className={S.subscribeInput} />
              </div>
              <button className={S.subscribeBtn}>
                <span>Vamos lá</span>
                <SubscribeBtnArrow width={20} height={20} fill="#FFF" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}


export default SignUpPage