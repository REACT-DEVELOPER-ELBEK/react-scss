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
                <div className="contact__form">
                    <div className="contact__inputs">
                    <div className="contact__input">
                    <label htmlFor="l1">Full name</label>
                    <input type="text" name='l1' />
                    </div>
                    
                    <div className="contact__input">
                    <label htmlFor="l2">Phone number</label>
                    <input type="text" name='l2' />
                    </div>

                    <div className="contact__input">
                    <label htmlFor="l3">Adress</label>
                    <input type="text" name='l3' />
                    </div>

                    <div className="contact__input">
                    <label htmlFor="l4">Email</label>
                    <input type="email" name='l4' />
                    </div>

                    <div className="contact__input">
                    <label htmlFor="l5">Request service</label>
                    <input type="text" name='l5' />
                    </div>

                    <div className="contact__input">
                    <label htmlFor="l6">Day of service</label>
                    <input type="text" name='l6' />
                    </div>
                    </div>
                    <div className="contact__area">
                    <label htmlFor="bote">Add a note</label>
                    <input type="text" name='nore' />
                    </div>
                    <button>Submite message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact