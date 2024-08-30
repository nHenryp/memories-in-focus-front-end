const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/photos`

export const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };



  export const show = async (photoId) => {
    try {
      const res = await fetch(`${BASE_URL}/${photoId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      })
      return res.json()
    } catch (error) {
        console.log(error)
    }
  }


  export const create = async (formData) => {
    try {
    const res = await fetch(BASE_URL, {
       method: 'POST',
       headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
       })
      return res.json()
    } catch (error) {
   console.log(error);
}
  }

  export const createComment = async (photoId, commentFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${photoId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePhoto = async (photoId) => {
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

  export const update = async (photoId, formData) => {
    try {
     const res = await fetch(`${BASE_URL}/${photoId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
     }) 
     return res.json()  
   } catch (error) {
     console.log (error)
   }
}

export const deleteComment = async (photoId, commentId) => {
    try {
        const res = await fetch(`${BASE_URL}/${photoId}/comments/${commentId}`, {
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