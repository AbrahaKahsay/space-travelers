import './Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../components/planet.png';

const Navbar = () => (
    <nav className="navbar">
        <div className='logo-container'>
            <div><img className='logo' src={Logo} alt="Logo" /></div>
            <h1>{ "Space Travelers' Hub"} </h1>
        </div>
        <div className="links">
           <ul>
            <li><Link to="/">Rockets</Link></li>
            <li><Link to="/mission">Mission</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
           </ul> 
        </div>
    </nav>
);

export default Navbar;