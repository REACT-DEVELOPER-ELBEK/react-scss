import React from 'react'
import './Contact.scss'
import '../normalize/Normalize.scss'

const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="contact__wrapper">
                <div className="contact__conent">
                    <h2>Contact Us</h2>
                    <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                    <button className='contact-number'>
                        <img src="assets/hero-call.svg" alt="" />
                        <div className="contact-number__info">
                            <p>Call us now</p>
                            <h2>(414) 567 - 2109</h2>
                        </div>
                    </button>
                    <h3>Not convinced yet?</h3>
                    <p>Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                    <button className='browse'>Browse our packages</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact