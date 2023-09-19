import React from 'react'
import './About.scss'
import '../normalize/Normalize.scss'

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__title">
                    <h2>About Us</h2>
                    <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                </div>
                <div className="about__cards">
                    <div className="about__child">
                        <img src="assets/about1.svg" alt="" />
                        <h2>1. Schedule online</h2>
                        <p>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                    </div>

                    <div className="about__child">
                        <img src="assets/about2.svg" alt="" />
                        <h2>2. Pay online easily</h2>
                        <p>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
                    </div>

                    <div className="about__child">
                        <img src="assets/about3.svg" alt="" />
                        <h2>3. Get your house cleaned</h2>
                        <p>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
                    </div>
                </div>
                <div className="about__btns">
                    <button>Get a free quote</button>
                    <button>Explore services</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About