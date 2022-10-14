import React from 'react'
import * as S from './styles'

import { Link } from 'react-router-dom'

type Props = {
  title: string;
  linkTo: string;
  active: boolean;
}


function BrowseMenuItem({ title, linkTo, active }: Props) {


  return (
    <S.Box active={active}>
      <Link to={linkTo}>{title}</Link>
    </S.Box>
  )

}

export default BrowseMenuItem
