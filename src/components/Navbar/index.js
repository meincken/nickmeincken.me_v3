import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll';
import './navbar.css'

const Navbar = () => {
  return (
    <header className='header'>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <ul>
            <li>
              <a onClick={() => scrollTo('#home')}>
                home
              </a>
            </li>
            <li>
              <a onClick={() => scrollTo('#about')}>
                about
              </a>
            </li>
            <li>
              <a onClick={() => scrollTo('#resume')}>
                resume
              </a>
            </li>
            <li>
              <a onClick={() => scrollTo('#works')}>
                works
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
