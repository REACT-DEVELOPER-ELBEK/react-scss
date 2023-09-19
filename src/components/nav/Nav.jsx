import React from 'react'
import './Nav.scss'
import '../normalize/Normalize.scss'

const nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav__wrapper">
              <div className="nav__items">
                <img src="assets/nav.svg" alt="" />
                <div className="nav__links">
                  <p>Home</p>
                  <p>About</p>
                  <p>Services</p>
                  <p>Articles</p>
                  <p>Contact</p>
                </div>
                </div>
                <div className="nav__options">
                  <p>Cart (0)</p>
                  <button>Get a free quote</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default nav