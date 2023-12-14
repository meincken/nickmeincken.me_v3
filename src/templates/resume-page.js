import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/LayoutResume'
import ContractorHistory from '../components/ContractorHistory'

export const ResumePageTemplate = ({
  title,
  subtitle,
}) => {
  // const PageContent = contentComponent || Content

  return (
    <div className='resume'>
      <div className={`hidden-print-block`}>
        <Link className={`btn`} to={`/`}>
          Home
        </Link>
        <Link target='_blank' className={`btn print`} href={`/nick-meincken-resume.pdf`}>
          Print
        </Link>
      </div>
      <header>
        <div>
          <h1>{title} <small>{subtitle}</small></h1>
        </div>
        <div className={`contact-info`}>
          <a href="https://nickmeincken.me">nickmeincken.me</a>
          <p>Surbiton, Surrey UK</p>
          <a href="tel:+44 7967 961441">+44 7967 961441</a>
          <a href="mailto:nick@meincken.com">nick@meincken.com</a>
          <a href="https://github.com/meincken">Meincken GitHub</a>
        </div>
      </header>
      <ContractorHistory />
    </div>
  )
}

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  personalInformation: PropTypes.string,
}

const ResumePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ResumePageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        personalinfo={frontmatter.personalInformation}
      />
    </Layout>
  )
}

ResumePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ResumePage

export const resumePageQuery = graphql`
  query ResumePageTemplpate {
    markdownRemark(frontmatter: { templateKey: { eq: "resume-page" } }) {
      html
      frontmatter {
        title
        subtitle
        personalInformation {
          description
          subtitle
          title
        }
      }
    }
  }
`