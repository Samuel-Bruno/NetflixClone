import React from 'react'
import * as S from './styles'

import { Link } from 'react-router-dom'


function SignInFooter() {


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
                <Link to={'/'}>Preferências de cookies</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Central de Ajuda</Link>
              </S.FooterLinkItem>
              <S.FooterLinkItem>
                <Link to={'/'}>Informações corporativas</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Termos de Uso</Link>
              </S.FooterLinkItem>
            </S.LinkColList>
          </S.LinkCol>
          <S.LinkCol>
            <S.LinkColList>
              <S.FooterLinkItem>
                <Link to={'/'}>Privacidade</Link>
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
      </S.FooterContainer>
    </S.Footer>
  )

}

export default SignInFooter