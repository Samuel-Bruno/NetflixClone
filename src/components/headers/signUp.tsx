import React from "react"
import { Link } from 'react-router-dom'
import S from './styles.module.css'

import { ReactComponent as Logo } from '../../assets/svgs/brandLogo.svg'


const SignUpHeader = () => {


  return (
    <header className={S.wrapper}>
      <div className={S.box}>
        <Logo className={S.brandLogo} fill={'#E50914'} />
        <div className={S.headerMenu}>
          <div className={S.selectLanguageBox}>
            <select name="language" id="languageSelect">
              <option value="pt-br" selected>Português</option>
              <option value="en-us">English</option>
            </select>
          </div>
          <div className={S.signInBtn}>
            <Link to={'/login'}>Entrar</Link>
          </div>
        </div>
      </div>
    </header>
  )

}


export default SignUpHeader