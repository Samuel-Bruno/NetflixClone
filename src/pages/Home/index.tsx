import React, { useEffect, useState } from 'react'
import HomeHeader from '../../components/_headers/Home'
import * as S from './styles'


function HomePage() {

  const [transparentBg, setTransparentBg] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setTransparentBg(!(window.scrollY > 32))
    })
  }, [])


  return (
    <S.Page>
      <HomeHeader transparentBg={transparentBg} />
      {/* Hightlight Media */}
      {/* Categories list */}
    </S.Page>
  )
}


export default HomePage