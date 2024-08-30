import { Link } from 'react-router-dom'
import { useState} from 'react'
import "./PhotoList.css"
const PhotoList = ({photos}) => {
   const [searchTerm, setSearchTerm] = useState('')
   const handleSearchChange = (event) =>{
    setSearchTerm(event.target.value);
   }
   const filteredPhotos = photos.filter(photo =>
    photo.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    photo.author_username?.toLowercase().includes(searchTerm.toLowerCase())
   )
    return (
        <main>
          <h1>Photo Gallery</h1>
          <div> <input type='text' placeholder='Search photos...' value={searchTerm} onChange={handleSearchChange}
          className='search-bar'
          />
          </div>
          <div className="image-grid">
            {filteredPhotos.map(photo => (
             <article key={photo._id}>
               <Link to={`/photos/${photo._id}`}>
               <div className='image-container'>
               <img src={photo.image} alt={photo.title}/>
               </div>
               </Link>
               <header>
               <h2>{photo.title}</h2>
               </header>
                 <footer>
                 <p> By
                  {photo.author.username} created on
                   {new Date(photo.createdAt).toLocaleDateString()}
                 </p>
               <p>{photo.text}</p>
               </footer>
             </article>
         ))}
         </div>
      </main>
    )
  }
  export default PhotoList