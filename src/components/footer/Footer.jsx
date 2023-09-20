import React from 'react'
import './Footer.scss'
import '../normalize/Normalize.scss'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__about">
                    <h2>Quality cleaning for your home</h2>
                    <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
                    <div className="quality__img">
                        <img src="assets/footer-quality.svg" alt="" />
                        <img src="assets/footer-quality.svg" alt="" />
                        <img src="assets/footer-quality.svg" alt="" />
                        <img src="assets/footer-quality.svg" alt="" />
                        <img src="assets/footer-quality.svg" alt="" />
                    </div>
                </div>
                <div className="footer__contact">
                    <h2>Contact us</h2>
                    <div className="footer__contact__info">
                        <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
                        <p>(414) 567 - 2109</p>
                        <p>contact@cleaning.com</p>
                    </div>
                </div>
                <div className="footer__hours">
                    <h2>Hours</h2>
                    <div className="hours__schedule">
                        <h3>Monday to Friday</h3>
                        <p>6:00 AM - 9:00 PM</p>
                    </div>
                    <div className="hours__schedule">
                        <h3>Saturday to Sunday</h3>
                        <p>8:00 AM - 8:00 PM</p>
                    </div>
                </div>
                <div className="footer__estimate">
                    <h2>Get a free estimate</h2>
                    <h3>(414) 567 - 2109</h3>
                    <p>Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</p>
                    <button>Get a free quote</button>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer