import React from 'react'
import './MediaContents.css'

const MediaContent = ({ title, subtitle, content, date }) => {
    return (
        <div className="media-container">
            <span className="heading">{title}</span>
            <div className="content-container">
                <span className="subheading">{subtitle}</span>
                    <iframe
                        src={content}
                        className='vidstyle'
                        loading="lazy"
                    ></iframe>
                <span className="date">{date}</span>
            </div>
        </div>

    )
}

export default MediaContent