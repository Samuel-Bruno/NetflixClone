import { Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/SignUp'
import SignInPage from '../pages/SignIn'
import ChooseProfilePage from '../pages/ChooseProfile'
import HomePage from '../pages/Home'
import VerifyProfilePicked from './VerifyProfilePicked'


const AppRoutes = () => {


  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      <Route path='/login' element={<SignInPage />} />
      <Route path='/browse' element={<VerifyProfilePicked
        ChooseProfilePg={<ChooseProfilePage />}
        InitialPage={<HomePage />}
      />} />
    </Routes>
  )

}


export default AppRoutes