import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import './profile.css'

const Profile = ({ aboutme }) => (
  <section id={`about`} className={`section about`}>
    <div className='container'>
      <PreviewCompatibleImage imageInfo={aboutme.image}/>
      <article>
        <h2>{aboutme.title}</h2>
        <p>{aboutme.description}</p>
        <h2>Contact</h2>
        <div className="split">
          <p>nick@meincken.com</p>
          <div>
            <Link className='btn' to={`/nick-meincken-resume.pdf`} download={`nick-meincken-resume`}>
              Download Resume PDF
            </Link>
            <Link className='btn' to="/nick-meincken-resume.docx" download>Download Resume DOC</Link>
            <Link className='btn' to="/resume">Online Resume</Link>
          </div>
        </div>
      </article>
    </div>
  </section>
)

Profile.propTypes = {
  aboutme: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  })
}

export default Profile
