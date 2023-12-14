import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import Social from '../Social'
import './jumbotron.css'

export default function FullWidthImage(props) {
  const {
    height = '100vh',
    img,
    title,
    subheading,
    description,
    imgPosition = 'center center',
  } = props

  return (
    <React.Fragment>
      <header id='home' className='jumbotron'>
        {img?.url ? (
          <img
            src={img}
            objectFit={'cover'}
            objectPosition={imgPosition}
            style={{
              gridArea: '1/1',
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: '100%',
            }}
            // This is a presentational image, so the alt should be an empty string
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={'cover'}
            objectPosition={imgPosition}
            style={{
              gridArea: '1/1',
              // You can set a maximum height for the image, if you wish.
              maxHeight: height,
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={['auto', 'webp', 'avif']}
          />
        )}
        {(title || subheading || description) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: '1/1',
              position: 'relative',
              // This centers the other elements inside the hero component
              placeItems: 'center',
              display: 'grid',
              zIndex: '2',
            }}
          >
            {title && (
              <h1>
                <span>{title}</span>
                <small>{subheading}</small>
              </h1>
            )}
            {description && <p>{description}</p>}
            <Social />
          </div>
        )}
      </header>
    </React.Fragment>
  )
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
  description: PropTypes.string,
}
