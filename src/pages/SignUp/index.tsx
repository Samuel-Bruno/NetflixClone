import React from "react"
import S from './styles.module.css'

import SignUpHeader from "../../components/headers/signUp"
import { ReactComponent as SubscribeBtnArrow } from '../../assets/svgs/signInArrow.svg'
import { ReactComponent as FaqPlusIcon } from '../../assets/svgs/faq_plus.svg'
import TvImage from '../../assets/images/tv.png'
import DownloadSTImage from '../../assets/images/strangerThings_download.jpg'
import STCover from '../../assets/images/strangerThings_downloadCover.png'
import DownloadGif from '../../assets/images/download-icon_gif.gif'
import DevicesImage from '../../assets/images/device-pile.png'
import ChildImage from '../../assets/images/child.png'


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
        <div className={S.promoSectionContainer}>
          <div className={S.promoSectionMediaAreaReverse} style={{ justifyContent: 'left' }}>
            <div className={S.promoDownloadWrapper}>
              <img src={DownloadSTImage} alt="" className={S.promoImage} />
              <div className={S.downloadingBox}>
                <div className={S.downloadInfo}>
                  <img src={STCover} alt="" className={S.downloadCoverImage} />
                  <div>
                    <span className={S.dwlTitle}>Stranger Things</span>
                    <span className={S.dwlStatus}>Download em andamento...</span>
                  </div>
                </div>
                <img src={DownloadGif} alt="" className={S.dwlGif} />
              </div>
            </div>
          </div>
          <div className={S.promoSectionTextsReverse}>
            <span className={S.promoSectionTitle}>Baixe séries para assistir offline.</span>
            <span className={S.promoSectionDesc}>Salve seus títulos favoritos e sempre tenha algo para assistir.</span>
          </div>
        </div>
      </section>

      <section className={S.promoSection}>
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
        <div className={S.promoSectionContainer}>
          <div className={S.promoSectionMediaAreaReverse}>
            <div className={S.promoMediaWrapperReverse}>
              <img src={ChildImage} alt="" className={S.promoImage} />
            </div>
          </div>
          <div className={S.promoSectionTextsReverse}>
            <span className={S.promoSectionTitle}>Crie perfis para crianças.</span>
            <span className={S.promoSectionDesc}>Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</span>
          </div>
        </div>
      </section>

      <section className={S.faqSection}>
        <div className={S.faqSectionContainer}>
          <h1>Perguntas frequentes</h1>
          <ul className={S.questionsList}>
            <li className={S.question}>
              <div className={S.qTop}>
                <span className={S.qTitle}>O que é a Netflix?</span>
                <FaqPlusIcon width={28} height={28} fill="#FFF" />
              </div>
              <div className={S.qAnswer}>
                <span>A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.<br /><br />Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais - tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                </span>
              </div>
            </li>
            <li className={S.question}>
              <div className={S.qTop}>
                <span className={S.qTitle}>Quanto custa a Netflix?</span>
                <FaqPlusIcon width={28} height={28} fill="#FFF" />
              </div>
              <div className={S.qAnswer}>
                <span>Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras.</span>
              </div>
            </li>
            <li className={S.question}>
              <div className={S.qTop}>
                <span className={S.qTitle}>Onde posso assistir?</span>
                <FaqPlusIcon width={28} height={28} fill="#FFF" />
              </div>
              <div className={S.qAnswer}>
                <span>Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.<br /><br />Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.</span>
              </div>
            </li>
            <li className={S.question}>
              <div className={S.qTop}>
                <span className={S.qTitle}>Como faço para cancelar?</span>
                <FaqPlusIcon width={28} height={28} fill="#FFF" />
              </div>
              <div className={S.qAnswer}>
                <span>A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.</span>
              </div>
            </li>
            <li className={S.question}>
              <div className={S.qTop}>
                <span className={S.qTitle}>O que eu posso assistir na Netflix?</span>
                <FaqPlusIcon width={28} height={28} fill="#FFF" />
              </div>
              <div className={S.qAnswer}>
                <span>A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.</span>
              </div>
            </li>
            <li className={S.question}>
              <div className={S.qTop}>
                <span className={S.qTitle}>A Netflix é adequada para crianças?</span>
                <FaqPlusIcon width={28} height={28} fill="#FFF" />
              </div>
              <div className={S.qAnswer}>
                <span>A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.<br /><br />O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.</span>
              </div>
            </li>
          </ul>

          <div className={S.emailArea}>
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

      <footer className={S.footer}>
        footer
      </footer>
    </div>
  )

}


export default SignUpPage