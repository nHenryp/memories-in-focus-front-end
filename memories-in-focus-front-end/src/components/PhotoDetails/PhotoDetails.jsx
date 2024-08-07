import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as photoService from '../../services/photoService'

const PhotoDetails = () => {
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

    return <main>
        <header>
            <h1>{photo.title}</h1>
        </header>
        <img src={photo.image}/>
        <p>
            {photo.description}
        </p>
        <section>
            <h5>comments</h5>
            {photo.comments.map((comment) => (
                <article key={comment._id}>
                    <header>
                        <p>
                            {comment.text}<br />
                            {comment.author.username} posted on <br />
                            {new Date(comment.createdAt).toLocaleDateString()}



                        </p>
                    </header>
                </article>
            ))}




        </section>
    </main>
}

export default PhotoDetails