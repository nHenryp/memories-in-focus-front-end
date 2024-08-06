import { Link } from 'react-router-dom'


const PhotoList = ({ photos }) => {
    console.log(photos)
    return (
    <main>
        {photos.map((photo) => (
            <Link key={photo._id} to={`/photos/${photo._id}`}>
               <h3>{photo.title}</h3>
               <h5>
                {photo.author.username} posted on<br/>
                {new Date(photo.createdAt).toLocaleDateString()}
               </h5>
            </Link>
        ))}

    </main>
    )
}

export default PhotoList