import React from 'react'
import './Services.scss'
import '../normalize/Normalize.scss'

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="services__title">
            <h2>Our Services</h2>
            <button>Explore services</button>
          </div>

          <div className="service__cards">
            <div className="service__child">
              <img src="assets/service1.svg" alt="" />
              <h2>House cleaning</h2>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>

            <div className="service__child">
              <img src="assets/service2.svg" alt="" />
              <h2>Office cleaning</h2>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>

            <div className="service__child">
              <img src="assets/service3.svg" alt="" />
              <h2>Industrial cleaning</h2>
              <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services