import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../components/planet.png';

const Navbar = () => (
    <nav className="navbar">
        <div className='logo-container'>
            <div><img className='logo' src={Logo} alt="Logo" /></div>
            <h1>{ "Space Travelers' Hub"} </h1>
        </div>
        <div className="links">
           <ul>
            <li><NavLink to="/">Rockets</NavLink></li>
            <li><NavLink to="/mission">Mission</NavLink></li>
            <li><NavLink to="/profile">My Profile</NavLink></li>
           </ul> 
        </div>
    </nav>
);

export default Navbar;