import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import * as photoService from '../../services/photoService';
import { Navigate } from 'react-router-dom/dist';

const CommentForm = ({ handleAddComment }) => {
    
  const [formData, setFormData] = useState({ text: '' });

  const { photoId, commentId } = useParams()

 

  

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (photoId && commentId){
    photoService.updateComment(photoId, commentId, formData) 
    Navigate(`/photos/${photoId}`)  
    } else {
    // handleAddComment
   handleAddComment(formData)
   setFormData({ text: '' });
    }
    
  };

  useEffect(() => {
    const fetchPhoto = async () => {
      const photoData = await photoService.show(photoId);
      // Find comment in fetched hoot data
      setFormData(photoData.comments.find((comment) => comment._id === commentId));
    };
    if (photoId && commentId) fetchPhoto();
  }, [photoId, commentId]);

 
  return (
    <main>
    <h2>{(photoId,commentId) ? 'Update Comment' : 'Create Comment'}</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Your comment:</label>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <button type="submit">SUBMIT COMMENT</button>
    </form>
    </main>
  );
};

export default CommentForm;