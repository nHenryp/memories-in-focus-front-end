import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as photoService from '../../services/photoService'

const PhotoDetails = (props) => {
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
        <p>
            {photo.image}<br/>
            {photo.description}
        </p>
    </main>
}

export default PhotoDetails