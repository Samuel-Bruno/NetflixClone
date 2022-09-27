import React from 'react'
import { Link } from 'react-router-dom';
import * as S from './styles'

type Props = {
  profileName: string;
  imageUrl: string;
}


function ProfileBox({ profileName, imageUrl }: Props) {


  return (
    <S.ProfileArea>
      <Link to={'/'}>
        <S.Box imageUrl={imageUrl} />
        <S.Name>{profileName}</S.Name>
      </Link>
    </S.ProfileArea>
  )

}

export default ProfileBox