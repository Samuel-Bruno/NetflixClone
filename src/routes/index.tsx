import { Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/SignUp'
import SignInPage from '../pages/SignIn'
import ChooseProfilePage from '../pages/ChooseProfile'
import VerifyProfilePicked from './VerifyProfilePicked'


const AppRoutes = () => {


  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      <Route path='/login' element={<SignInPage />} />
      <Route path='/browse' element={<VerifyProfilePicked
        ChooseProfilePg={<ChooseProfilePage />}
        InitialPage={<div>Initial Page</div>}
      />} />
    </Routes>
  )

}


export default AppRoutes