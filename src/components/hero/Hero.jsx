import React from 'react'
import './Hero.scss'
import '../normalize/Normalize.scss'

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <h1>Quality cleaning for your home</h1>
                    <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className="hero__options">
                        <button>Get a free quote</button>
                        <a href='#' className="hero__call">
                            <img src="assets/hero-call.svg" alt="" />
                            <div className="hero-call__info">
                                <p>call us now</p>
                                <h3>(414) 567 - 2109</h3>
                            </div>
                        </a>
                    </div>
                </div>
                <img src="assets/hero.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero