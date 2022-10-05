import React from 'react'
import * as S from './styles'

import { Link } from 'react-router-dom'


function HomeFooter() {


  return (
    <S.Footer>
      <S.FooterContainer>
        {/* social media area */}
        <S.LinksArea>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Audiodescrição</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Relações com investidores</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Avisos legais</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Central de Ajuda</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Carreiras</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Preferências de cookies</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Cartão pré-pago</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Termos de Uso</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Informações corporativas</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Imprensa</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Privacidade</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Entre em contato</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
        </S.LinksArea>
        <S.ServiceCodeArea onClick={(e) => {
          const spanEl = e.currentTarget.querySelector('span')
          if (spanEl) spanEl.innerHTML = '000-000'
        }}>
          <span>Código de serviço</span>
        </S.ServiceCodeArea>
        <S.FooterBrandName>
          <span>&copy; 1997-2022 Netflix, Inc.</span>
          <span>{`{1a1a-1a-1a-1a-1a1a1a}`}</span>
        </S.FooterBrandName>
      </S.FooterContainer>
    </S.Footer>
  )

}

export default HomeFooter
