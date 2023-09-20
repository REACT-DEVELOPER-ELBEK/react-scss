import React from 'react'
import './Links.scss'
import '../normalize/Normalize.scss'

const links = () => {
  return (
    <div className="links">
        <div className="container">
            <div className="links__wrapper">
                <img src="assets/nav.svg" alt="" />
                <div className="links__way">
                <p>Copyright © Cleaning X | Designed by <a href="#">BRIX Templates</a></p>
                <p>- Powered by <a href="webflow.com">Webflow</a></p>
                <a href="license.com">- Licenses</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default links