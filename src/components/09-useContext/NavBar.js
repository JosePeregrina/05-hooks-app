import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink activeClassName='active' className='nav-link' exact to='/'>
              Home
            </NavLink>
            <NavLink activeClassName='active' className='nav-link' exact to='/about'>
              About
            </NavLink>
            <NavLink activeClassName='active' className='nav-link' exact to='/login'>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
