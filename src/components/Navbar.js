import * as React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';
import './styles/Navbar.css';

const Navbar = () => {
  const activeClassName = 'underline';
  return (
    <section className="nav">
      <div className="logo">
        <div className="logo-container">
          <img src={logo} alt="planet" className="logo-container-img" />
          <p> Space Traveler&rsquo;s Hub</p>
        </div>
      </div>
      <nav className="nav-container">
        <ul className="nav-container-items">
          <li>
            <NavLink
              to="/rockets"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              Missions
            </NavLink>
          </li>
          <li className="profile">
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
              My Profiles
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
