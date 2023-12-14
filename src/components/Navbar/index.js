import React from 'react'
import { Link } from 'gatsby'
import './navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <ul>
            <li>
              <Link to="#home">
                home
              </Link>
            </li>
            <li>
              <Link to="#about">
                about
              </Link>
            </li>
            <li>
              <Link to="#resume">
                resume
              </Link>
            </li>
            <li>
              <Link to="#works">
                works
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
