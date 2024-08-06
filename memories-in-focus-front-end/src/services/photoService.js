const BASE_URL ='http://localhost:3000/photos'

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const show = async (photoId) => {
    try {
        const res = await fetch(`${BASE_URL}/${photoId}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export { index, show }