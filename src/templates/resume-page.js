import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import LayoutResume from '../components/LayoutResume'
import ContractorHistory from '../components/Resume/ContractorHistory'
import Qualifications from '../components/Resume/Qualifications'
import Skills from '../components/Resume/Skills'

export const ResumePageTemplate = ({
  title,
  subtitle,
  contentComponent,
  personalinfo,
}) => {
  const PageContent = contentComponent || Content

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
      <header className='resume-header'>
        <div>
          <h1>{title} <small>{subtitle}</small></h1>
          <div className={`contact-info`}>
            <a href="https://nickmeincken.me">nickmeincken.me</a>
            <p>Surbiton, Surrey UK</p>
            <a href="tel:+44 7967 961441">+44 7967 961441</a>
            <a href="mailto:nick@meincken.com">nick@meincken.com</a>
            <a href="https://github.com/meincken">Meincken GitHub</a>
          </div>
          <div className={`contact-info-print`}>
            <p>https://nickmeincken.me</p>
            <p>Surbiton, Surrey UK</p>
            <p>+44 7967 961441</p>
            <p>nick@meincken.com</p>
            <p>https://github.com/meincken</p>
          </div>
        </div>
      </header>
      <PageContent content={personalinfo.description} />

      <article className='resume-body'>
        <aside>
          <Skills />
          <Qualifications />
        </aside>
        <section>
          <ContractorHistory />
        </section>
      </article>
      <footer className="hidden-print-block">
        <p>References available upon request</p>
        <p>{`\u00a92000 -  ${new Date().getFullYear()} ${title}`}</p>
      </footer>
    </div>
  )
}

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  contentComponent: PropTypes.func,
  personalInformation: PropTypes.string,
}

const ResumePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <LayoutResume>
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        personalinfo={frontmatter.personalInformation}
      />
    </LayoutResume>
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