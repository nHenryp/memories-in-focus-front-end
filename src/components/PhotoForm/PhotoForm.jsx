import { useState, useEffect } from 'react'
import ImageUpload from '../ImageUpload/ImageUpload.jsx'
import { useParams } from 'react-router-dom'
import * as photoService from '../../services/photoService'
import './PhotoForm.css'

const PhotoForm = ({ handleAddPhoto, handleUpdatePhoto }) => {
  
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    text: ''
  });

  const { photoId } = useParams()

  useEffect(() => {
    const fetchPhoto = async () => {
     const singlePhoto = await photoService.show(photoId) 
     setFormData(singlePhoto)
     
    }
   if (photoId) {
     fetchPhoto()
   }
  }, [photoId])



  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleImageUpload = (imageUrl) => {
    setFormData({ ...formData, image: imageUrl });
  };

 

  const handleSubmit = (evt) => {
    evt.preventDefault();
   if (photoId) {
    handleUpdatePhoto(photoId, formData)
   } else {
     handleAddPhoto(formData)
  }
}

  return (
    <main>
      <div className='container-lg'>
      <form onSubmit={handleSubmit}>
      <h1>{photoId ? 'Edit Photo' : 'Add New Photo'}</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="image-upload">Image</label>
        <ImageUpload
          name="image"
          label="Upload Image"
          photoImage={formData.image}
          handleImageUpload={handleImageUpload}
        />
        <label htmlFor="description-input">Description</label>
        <textarea
          required
          name="description"
          id="description-input"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
      </div>
    </main>
  );
};
export default PhotoForm









