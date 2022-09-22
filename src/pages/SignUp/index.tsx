import React from "react"
import S from './styles.module.css'

import SignUpHeader from "../../components/headers/signUp"
import { ReactComponent as SubscribeBtnArrow } from '../../assets/svgs/signInArrow.svg'
import TvImage from '../../assets/images/tv.png'
import DevicesImage from '../../assets/images/device-pile.png'


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
                <input type="email" name="email" className={S.subscribeInput} placeholder=" " />
                <label className={S.inputLabel}>Email</label>
                <div className={S.inputError}>  {/*RegEx error*/}
                  <span>O email é obrigatório</span>
                </div>
              </div>
              <button className={S.subscribeBtn}>
                <span>Vamos lá</span>
                <SubscribeBtnArrow width={20} height={20} fill="#FFF" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={S.promoSection}>
        <div className={S.promoSectionContainer}>
          <div className={S.promoSectionTexts}>
            <span className={S.promoSectionTitle}>Aproveite na TV.</span>
            <span className={S.promoSectionDesc}>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</span>
          </div>
          <div className={S.promoSectionMediaArea}>
            <div className={S.promoMediaWrapper}>
              <img src={TvImage} alt="" className={S.promoImage} />
              <div className={S.promoVideoArea}>
                <video className={S.promoVideo} autoPlay playsInline muted loop >
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></source>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={S.promoSection}>
      </section>

      <section className={S.promoSection} id="watchOnDevice">
        <div className={S.promoSectionContainer}>
          <div className={S.promoSectionTexts}>
            <span className={S.promoSectionTitle}>Assita quando quiser.</span>
            <span className={S.promoSectionDesc}>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</span>
          </div>
          <div className={S.promoSectionMediaArea}>
            <div className={S.promoMediaWrapper}>
              <img src={DevicesImage} alt="" className={S.promoImage} />
              <div className={S.deviceVideoArea}>
                <video className={S.promoVideo} autoPlay playsInline muted loop >
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"></source>
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={S.promoSection}>
      </section>
    </div>
  )

}


export default SignUpPage