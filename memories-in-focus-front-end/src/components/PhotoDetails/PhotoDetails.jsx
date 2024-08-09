import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import * as photoService from '../../services/photoService'
import CommentForm from '../CommentForm/CommentForm'
import { AuthedUserContext } from '../../App'
import './PhotoDetails.css'
const PhotoDetails = ({handleDeletePhoto}) => {
    const user = useContext (AuthedUserContext)
    const [photo, setPhoto] = useState(null)
    const { photoId } = useParams()
    useEffect(() => {
        const fetchPhoto = async () => {
            const photo = await photoService.show(photoId)
            console.log('singlePhoto', photo)
            setPhoto(photo)
        }
        fetchPhoto()
    }, [photoId])
    if (!photo) return <main>Loading...</main>
    const handleAddComment = async (formData) => {
        const newComment = await photoService.createComment(photoId, formData)
       setPhoto ({
          ...photo,
          comments: [...photo.comments, newComment] })
      }
      const handleDeleteComment = async (commentId) => {
      const deletedComment = await photoService.deleteComment(photoId,commentId);
          setPhoto({
              ...photo,
              comments: photo.comments.filter((comment) => comment._id !== commentId),
            });
        };
        return (
          <main className="container">
              <div className="photo-details">
                  <img src={photo.image} alt={photo.title} />
                  <div className="photo-meta">
                      <h1>{photo.title.toUpperCase()}</h1>
                      <p>
                          Posted by <strong>{photo.author.username}</strong> on{" "}
                          {new Date(photo.createdAt).toLocaleDateString()}
                      </p>
                      <p>{photo.description}</p>
                      {photo.author._id === user._id && (
                          <div className="actions">
                              <Link to={`/photos/${photoId}/edit`} className="btn btn-primary">
                                  Edit
                              </Link>
                              <button
                                  className="btn btn-danger"
                                  onClick={() => handleDeletePhoto(photoId)}
                              >
                                  Delete Photo
                              </button>
                          </div>
                      )}
                  </div>
              </div>
              <section className="comment-section">
                  <CommentForm handleAddComment={handleAddComment} />
                  {!photo.comments.length && <p>There are no comments.</p>}
                  <ul className="comments-list">
                      {photo.comments.map((comment) => (
                          <li key={comment._id}>
                              <header>
                                  <p>
                                      {comment.author.username} created on{" "}
                                      {new Date(comment.createdAt).toLocaleDateString()}
                                  </p>
                              </header>
                              <p>{comment.text}</p>
                              {comment.author._id === user._id && (
                                  <div className="actions">
                                      <Link
                                          to={`/photos/${photoId}/comments/${comment._id}/edit`}
                                          className="btn btn-secondary"
                                      >
                                          Edit Comment
                                      </Link>
                                      <button
                                          className="btn btn-danger"
                                          onClick={() => handleDeleteComment(comment._id)}
                                      >
                                          Delete Comment
                                      </button>
                                  </div>
                              )}
                          </li>
                      ))}
                  </ul>
              </section>
          </main>
      );
    }
    export default PhotoDetails;