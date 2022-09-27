import { Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/SignUp'
import SignInPage from '../pages/SignIn'


const AppRoutes = () => {


  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      <Route path='/login' element={<SignInPage />} />
    </Routes>
  )

}


export default AppRoutes