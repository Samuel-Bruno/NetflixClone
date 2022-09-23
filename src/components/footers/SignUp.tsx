import React from 'react'
import { Link } from 'react-router-dom'
import S from './styles.module.css'


function SignUpFooter () {


  return (
    <footer className={S.footer}>
      <div className={S.footerContainer}>
        <h6>Dúvidas? Ligue <Link to={'tel:0800 591 8942'}>0800 591 8942</Link></h6>
        <div className={S.linksArea}>
          <div className={S.linkCol}>
            <ul className={S.linkColList}>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Perguntas frequentes</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Relações com investidores</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Formas de assistir</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Informações corporativas</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Só na Netflix</Link>
              </li>
            </ul>
          </div>
          <div className={S.linkCol}>
            <ul className={S.linkColList}>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Central de Ajuda</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Carreiras</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Termos de Uso</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Entre em contato</Link>
              </li>
            </ul>
          </div>
          <div className={S.linkCol}>
            <ul className={S.linkColList}>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Conta</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Resgatar cartão pré-pago</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Privacidade</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Text de velocidade</Link>
              </li>
            </ul>
          </div>
          <div className={S.linkCol}>
            <ul className={S.linkColList}>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Media Center</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Comprar cartão pré-pago</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Preferências de cookies</Link>
              </li>
              <li className={S.footerLinkItem}>
                <Link to={'/'} className={S.footerLink}>Avisos legais</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={S.selectLanguageBox}>
          <select name="language" id="languageSelect">
            <option value="pt-br" selected>Português</option>
            <option value="en-us">English</option>
          </select>
        </div>
        <span className={S.footerBrandName}>Netflix Brasil</span>
      </div>
    </footer>
  )

}

export default SignUpFooter