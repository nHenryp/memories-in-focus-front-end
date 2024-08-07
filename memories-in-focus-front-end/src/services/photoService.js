const BASE_URL ='http://localhost:3000/photos'


const create = async (photoFormData) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(photoFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };


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

const deletePhoto = async (photoId) => {
  try {
    const res = await fetch(`${BASE_URL}/${photoId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { index, show, create, deletePhoto };