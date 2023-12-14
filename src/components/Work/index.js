import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import './work.css'

const Work = ({ workItems }) => (
  <section id={`works`} className={`section work`}>
    <div className='container'>
      <header>
        <h2>{workItems.heading}</h2>
      </header>
      <section className='portfolio'>
        {workItems.project.map((item) => (
          <article className='project' key={item.title}>
            <PreviewCompatibleImage imageInfo={item.image}/>
            <div className='overlay'>
              <div className='overlay-container'>
                <h3><Link className='stretched-link' target='_blank' to={item.url}>{item.title}</Link></h3>
                <p>{item.description}</p>            
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>

  </section>
)

Work.propTypes = {
  workItems: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  ),
}

export default Work
