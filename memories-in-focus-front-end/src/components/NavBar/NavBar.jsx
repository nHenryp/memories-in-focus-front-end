import { useContext } from 'react'; // import useContext to grab the context
import { AuthedUserContext } from '../../App'
import { Link } from 'react-router-dom'



const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext)



    return (
      <>
      { user ? (
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to='/photos'>Photo Gallery</Link></li>
            <li><Link to="/photos/new">New Photo</Link></li>
            <li><Link to="" onClick={handleSignout}>Sign Out</Link></li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      )}
    </>
  )
}

  export default NavBar
  