import { useEffect, createContext, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import Dashboard from './components/Dashboard/Dashboard';
import * as authService from '../src/services/authService';
import * as photoService from '../src/services/photoService';
import PhotoList from './components/PhotoList/PhotoList';
import PhotoDetails from './components/PhotoDetails/PhotoDetails';
import PhotoForm from './components/PhotoForm/PhotoForm';
import CommentForm from './components/CommentForm/CommentForm'


export const AuthedUserContext = createContext()

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [photos, setPhotos] = useState([]);

  // Location variables
  const navigate = useNavigate()
  const handleSignout = () => {
    authService.signout()
    setUser(null)
  }
    const fetchAllPhotos = async () =>{
    const allPhotos = await photoService.index()
    setPhotos(allPhotos) // set to state
  }
useEffect(() => {
  if (user) {
    fetchAllPhotos()
  }
}, [user])

  const handleAddPhoto = async (photoFormData) => {
    const newPhoto = await photoService.create(photoFormData);
    setPhotos([newPhoto, ...photos]);
    navigate('/photos');
  };

  const handleUpdatePhoto = async (photoId, formData) => {
    const updatedPhoto = await photoService.update(photoId, formData)
    console.log(updatedPhoto)
    navigate(`/photos/${photoId}`);
  };
  
  
  const handleDeletePhoto = async (photoId) => {
    const deletedPhoto = await photoService.deletePhoto(photoId)
    console.log(deletedPhoto)
    await fetchAllPhotos()
    navigate('/photos')
  }


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
          <Route path="/photos/:photoId" element={<PhotoDetails handleDeletePhoto={handleDeletePhoto} />} />
          <Route path="/photos/new" element={<PhotoForm handleAddPhoto={handleAddPhoto} />} />
          <Route path="/photos/:photoId/edit" element={<PhotoForm handleUpdatePhoto={handleUpdatePhoto} />} />
          <Route path="/photos/:photoId/comments/:commentId/edit" element={<CommentForm />} />
          </>
          :
          <>
          <Route path='/' element={<HomePage />} />
          <Route path="/photos" element={<PhotoList />} />
          </>
        }

        <Route path='/signup' element={<SignupForm setUser={setUser} />} />
        <Route path='/signin' element={<SigninForm setUser={setUser} />} />
      </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
