import { useState } from 'react';
import ImageUpload from '../ImageUpload/ImageUpload.jsx'


const PhotoForm = ({ handleAddPhoto }) => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: ''
  });
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleImageUpload = (imageUrl) => {
    setFormData({ ...formData, image: imageUrl });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddPhoto(formData)
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="description-input">Text</label>
        <textarea
          required
          name="description"
          id="description-input"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};
export default PhotoForm









