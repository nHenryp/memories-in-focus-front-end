import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import * as photoService from '../../services/photoService'
import CommentForm from '../CommentForm/CommentForm'
import { AuthedUserContext } from '../../App'


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
            <main>
              <header>
                <img src={photo.image}/>
                <h1>{photo.title.toUpperCase()}</h1>
                <p>
                  {photo.author.username} created on
                  {new Date(photo.createdAt).toLocaleDateString()}
                </p>
              </header>
              <p>{photo.description}</p>
    
              
    
    {/* Update/delete*/}
    { photo.author._id === user._id &&
          
    <section>
        <>
        <Link to={`/photos/${photoId}/edit`}>Edit</Link>
        <button onClick={() => handleDeletePhoto(photoId)}> Delete Photo </button>
        </>
        
    </section>
     }
              <section>
                <h2>Comments</h2>
                <CommentForm handleAddComment={handleAddComment} />
                
     {!photo.comments.length && <p>There are no comments.</p>}
    
      {photo.comments.map((comment) => (
        <article key={comment._id}>
          <header>
            <p>
              {comment.author.username} created on
              {new Date(comment.createdAt).toLocaleDateString()}
            </p>
    
         
    
          </header>
          <p>{comment.text}</p>
          { comment.author._id === user._id &&
          <section>
          
          <Link to={`/photos/${photoId}/comments/${comment._id}/edit`}>Edit comment </Link>
          <button onClick={() => handleDeleteComment (comment._id)}>Delete Comment </button>
          
          </section>
         }
        
        </article>
      ))}
              </section>
            </main>
        )
      }
      
      
      
    export default PhotoDetails;
