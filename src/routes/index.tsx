import { Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/SignUp'
import SignInPage from '../pages/SignIn'
import ChooseProfilePage from '../pages/ChooseProfile'
import HomePage from '../pages/Home'
import SeriesPage from '../pages/Series'
import VerifyProfilePicked from './VerifyProfilePicked'
import MoviesPage from '../pages/Movies'
import LatestPage from '../pages/Latest'


const AppRoutes = () => {


  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      <Route path='/login' element={<SignInPage />} />
      <Route path='/browse'>
        <Route path='' element={
          <VerifyProfilePicked ChooseProfilePg={<ChooseProfilePage />} Page={<HomePage />} />
        } />
        <Route path='genre/83' element={
          <VerifyProfilePicked ChooseProfilePg={<ChooseProfilePage />} Page={<SeriesPage />} />
        } />
        <Route path='genre/34399' element={
          <VerifyProfilePicked ChooseProfilePg={<ChooseProfilePage />} Page={<MoviesPage />} />
        } />
        <Route path='latest' element={
          <VerifyProfilePicked ChooseProfilePg={<ChooseProfilePage />} Page={<LatestPage />} />
        } />
        {/* <Route path='my-list' element={
          <VerifyProfilePicked ChooseProfilePg={<ChooseProfilePage />} Page={} />
        } /> */}
        {/* <Route path='original-audio' element={
          <VerifyProfilePicked ChooseProfilePg={<ChooseProfilePage />} Page={} />
        } /> */}
      </Route>
    </Routes>
  )

}


export default AppRoutes