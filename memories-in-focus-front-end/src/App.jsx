import { createContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import SignupForm from './components/SignupForm/SignupForm' 
import SigninForm from './components/SigninForm/SigninForm'
import Dashboard from './components/Dashboard/Dashboard'
import * as authService from '../src/services/authService'
import * as photoService from '../src/services/photoService'
import PhotoList from './components/PhotoList/PhotoList'
import PhotoDetails from './components/PhotoDetails/PhotoDetails'


export const AuthedUserContext = createContext(null)

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [photos, setPhotos] = useState([])

  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }
  useEffect(() => {
    const fetchAllPhotos = async () => {
      const photoData = await photoService.index()
      console.log(photoData)
      setPhotos(photoData)
    }
    if (user) fetchAllPhotos()
  }, [user])
  

  return (
    <>
    <AuthedUserContext.Provider value={user}>

    
     <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {
          user ?
          <>
          <Route path='/' element={<Dashboard user={user} />} />
          <Route path='/photos' element={<PhotoList photos={photos}/>} />
          <Route path='/photos/:photoId' element={<PhotoDetails />}/>
          </>
          :
          <Route path='/' element={<HomePage />} />
        }

        <Route path='/signup' element={<SignupForm setUser={setUser} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
      </AuthedUserContext.Provider>
    </>
  )
}

export default App