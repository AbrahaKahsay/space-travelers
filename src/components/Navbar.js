
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <h1>logo</h1>
        <div className="links">
            <Link to="/">Rockets</Link>
            <Link to="/mission">Mission</Link>
            <Link to="/profile">My Profile</Link>
        </div>
    </nav>
);

export default Navbar;