import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import FullWidthImage from '../components/Jumbotron'
import Education from '../components/Education'
import Profile from '../components/Profile'
import ContractorHistory from '../components/ContractorHistory'
import Skills from '../components/Skills'
import Work from '../components/Work'

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  description,
  aboutme,
  education,
  skills,
  work,
}) => {
  const heroImage = getImage(image) || image

  return (
    <>
      <FullWidthImage
        img={heroImage}
        title={heading}
        subheading={subheading}
        description={description}
      />
      <Profile aboutme={aboutme} />
      <Education educationItems={education} />
      <ContractorHistory />
      <Skills skillItems={skills} />
      <Work workItems={work} />
    </>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  aboutme: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  education: PropTypes.shape({
    courses: PropTypes.array,
  }),
  contracts: PropTypes.shape({
    positions: PropTypes.array,
  }),
  skills: PropTypes.shape({
    skillset: PropTypes.array,
  }),
  work: PropTypes.shape({
    project: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.hero.image}
        heading={frontmatter.hero.heading}
        subheading={frontmatter.hero.subheading}
        description={frontmatter.hero.description}
        aboutme={frontmatter.aboutme}
        education={frontmatter.education}
        contracts={frontmatter.contracts}
        skills={frontmatter.skills}
        work={frontmatter.work}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          heading
          subheading
          description
        }
        aboutme {
          image {
            publicURL
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 120
                height: 120
                layout: CONSTRAINED
              )
            }
          }
          title
          description
        }
        education {
          title
          courses {
            title
            course
            year
          }
        }
        contracts {
          title
        }
        skills {
          title
          description
          skillset {
            name
            level
          }
        }
        work {
          heading
          project {
            description
            title
            url
            image {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
