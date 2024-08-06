import { useState } from 'react';
const PhotoForm = ({ handleAddPhoto }) => {
    const [formData, setFormData] = useState({
    title: '',
    image: '',
    text: ''
  });
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
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
        <label htmlFor="image-input">image</label>
        <input
          required
          name="image"
          id="image-input"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="description-input">Text</label>
        <textarea
          required
          type="text"
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









