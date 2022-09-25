import React from "react"
import * as S from './styles'

import SignUpHeader from "../../components/headers/signUp"
import SignUpEmailSubscribe from "../../components/SignUpEmailSubscribe"
import SignUpPromoSection from "../../components/SignUpPromoSection"
import FaqQuestion from "../../components/faqQuestion"
import SignUpFooter from "../../components/footers/SignUp"

import TvImage from '../../assets/images/tv.png'
import ChildImage from '../../assets/images/child.png'


function SignUpPage() {


  return (
    <S.Page>
      <S.FirstBrake>
        <S.FirstBrakeWrapper>
          <SignUpHeader />
          <S.BannerCenter>
            <h1>Filmes, séries e muito mais. Sem limites.</h1>
            <h2>Assista onde quiser. Cancele quando quiser.</h2>
            <SignUpEmailSubscribe />
          </S.BannerCenter>
        </S.FirstBrakeWrapper>
      </S.FirstBrake>

      <SignUpPromoSection title="Aproveite na TV."
        desc="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        img={TvImage}
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        reverse={false}
      />

      <SignUpPromoSection title="Baixe séries para assistir offline."
        desc="Salve seus títulos favoritos e sempre tenha algo para assistir."
        dwlMediaAnimation={true}
        reverse={true}
      />

      <SignUpPromoSection title="Assita quando quiser."
        desc="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
        img={TvImage}
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
        reverse={false}
      />

      <SignUpPromoSection title="Crie perfis para crianças."
        desc="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
        img={ChildImage}
        reverse={true}
      />

      <S.FaqSection>
        <S.FaqSectionContainer>
          <h1>Perguntas frequentes</h1>
          <S.QuestionsList>
            <FaqQuestion title="O que é a Netflix?"
              answer="A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.<br /><br />Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais - tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes."
            />
            <FaqQuestion title="Quanto custa a Netflix?"
              answer="Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato nem taxas extras."
            />
            <FaqQuestion title="Onde posso assistir?"
              answer="Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.<br /><br />Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar."
            />
            <FaqQuestion title="Como faço para cancelar?"
              answer="A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento."
            />
            <FaqQuestion title="O que eu posso assistir na Netflix?"
              answer="A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser."
            />
            <FaqQuestion title="A Netflix é adequada para crianças?"
              answer="A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.<br /><br />O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam."
            />
          </S.QuestionsList>

          <S.EmailArea>
            <SignUpEmailSubscribe />
          </S.EmailArea>
        </S.FaqSectionContainer>
      </S.FaqSection>

      <SignUpFooter />

    </S.Page>
  )

}


export default SignUpPage