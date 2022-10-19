type Props = {
  ChooseProfilePg: JSX.Element;
  Page: JSX.Element;
}


function VerifyProfilePicked({ ChooseProfilePg, Page }: Props) {

  const profileAlreadyPicked = true


  return (profileAlreadyPicked) ? Page : ChooseProfilePg

}

export default VerifyProfilePicked