import React from 'react'
import * as S from './styles'

import { Link } from 'react-router-dom'


function SignUpFooter() {


  return (
    <S.Footer>
      <S.FooterContainer>
        <h6>Dúvidas? Ligue <Link to={'tel:0800 591 8942'}>0800 591 8942</Link></h6>
        <S.LinksArea>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Perguntas frequentes</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Relações com investidores</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Formas de assistir</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Informações corporativas</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Só na Netflix</Link>
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
                <Link to={'/'}>Termos de Uso</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Entre em contato</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Conta</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Resgatar cartão pré-pago</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Privacidade</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Text de velocidade</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Media Center</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Comprar cartão pré-pago</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Preferências de cookies</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Avisos legais</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
        </S.LinksArea>
        <S.SelectLanguageBox>
          <S.Select name="language" id="languageSelect" defaultValue={'pt-br'}>
            <S.Option value="pt-br">Português</S.Option>
            <S.Option value="en-us">English</S.Option>
          </S.Select>
        </S.SelectLanguageBox>
        <S.FooterBrandName>Netflix Brasil</S.FooterBrandName>
      </S.FooterContainer>
    </S.Footer>
  )

}

export default SignUpFooter