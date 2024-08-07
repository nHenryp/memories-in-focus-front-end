import { Link } from 'react-router-dom'


const PhotoList = ({ photos }) => {
    console.log(photos)
    return (
        <main>
            {photos.map(photo => {
                return (
             <Link key={photo._id} to={`/photos/${photo._id}`}>
             <article>
               <header>
                 <h2>{photo.title}</h2>
                 <p>
                   {photo.author.username} created on 
                   {new Date(photo.createdAt).toLocaleDateString()}
                 </p>
               </header>
               <p>{photo.text}</p>
             </article>
           </Link>
         )
       })}   
  </main>
    )
  }
  
  export default PhotoList