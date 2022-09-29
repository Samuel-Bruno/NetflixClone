import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import * as S from './styles'

type Props = {
  imageUse: true;
  imgSrc: string;
  profileName: string;
} | {
  imageUse: false;
  svg: ReactElement;
  itemTitle: string;
}


function UserOptionsProfileItem(props: Props) {


  return (props.imageUse) ? (
    <S.Box>
      <Link to={'/token?aslkdjalskdjlasd'}>
        <S.ProfileImage src={props.imgSrc} alt="" />
        <S.ProfileName>{props.profileName}</S.ProfileName>
      </Link>
    </S.Box>
  ) : (
    <S.Box>
      <Link to={'/token?aslkdjalskdjlasd'}>
        <S.IconBox>{props.svg}</S.IconBox>
        <S.ProfileName>{props.itemTitle}</S.ProfileName>
      </Link>
    </S.Box>
  )

}

export default UserOptionsProfileItem
