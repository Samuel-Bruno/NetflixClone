import React from 'react'
import ChooseProfilePage from '../../pages/ChooseProfile'


type Props = {
  ChooseProfilePg: JSX.Element;
  InitialPage: JSX.Element;
}


function VerifyProfilePicked({ ChooseProfilePg, InitialPage }: Props) {

  const profileAlreadyPicked = false


  return (profileAlreadyPicked) ? InitialPage : ChooseProfilePg

}

export default VerifyProfilePicked