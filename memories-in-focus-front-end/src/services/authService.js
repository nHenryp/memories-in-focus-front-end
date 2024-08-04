const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL


const signup = async (formData) => {

    try {
      const res = await fetch(`${BACKEND_URL}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (json.error) {
        throw new Error(json.error);
      }
      return json;
    } catch (error) {
      console.log(error);
      throw error;
    }

};

const signin = async (user) => {
    try {
      const res = await fetch(`${BACKEND_URL}/users/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      const json = await res.json();
  
      if (json.error) {
        throw new Error(json.error);
      }
  
      if (json.token) {
        const user = JSON.parse(atob(json.token.split('.')[1]));
        return user;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  
  export  { signup, signin };