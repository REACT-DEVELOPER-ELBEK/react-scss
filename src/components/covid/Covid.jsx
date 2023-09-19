import React from 'react'
import './Covid.scss'
import '../normalize/Normalize.scss'

const Covid = () => {
  return (
    <div className="covid">
        <div className="container">
            <div className="covid__wrapper">
                <img src="assets/covid.svg" alt="" />
                <div className="covid__content">
                    <h3>Covid-19 sanitization</h3>
                    <h2>We follow guidelines to keep you safe from the COVID-19 virus</h2>
                    <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                    <div className="covid__options">
                        <button>Get a free quote</button>
                        <a href='#' className="covid__call">
                            <img src="assets/hero-call.svg" alt="" />
                            <div className="covid-call__info">
                                <p>call us now</p>
                                <h3>(414) 567 - 2109</h3>
                            </div>
                        </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Covid