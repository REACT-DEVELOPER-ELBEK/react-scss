import React from 'react'
import './Article.scss'
import '../normalize/Normalize.scss'

const Article = () => {
  return (
    <div className="article">
        <div className="container">
            <div className="article__wrapper">
                <div className="article__title">
                    <h2>Articles & resources</h2>
                    <div className="article-title__btns">
                        <button>Get a free quote</button>
                        <button>Browse articles</button>
                    </div>
                </div>
                <div className="article__parent">
                    <div className="article__child">
                        <img src="assets/article1.svg" alt="" />
                        <div className="article-child__content">
                            <h2>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <h3>Jan 28, 2022</h3>
                        </div>
                    </div>
                    <div className="article__child">
                        <img src="assets/article2.svg" alt="" />
                        <div className="article-child__content">
                            <h2>How to properly disinfect your phone and other electronics</h2>
                            <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                            <h3>Feb 1, 2022</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article