import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class ContractorHistory extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section id='resume' className='section contracts'>
        <div className='container'>
          <header>
            <h2>Employment History</h2>
          </header>
          {posts &&
            posts.map(({ node: post }) => (
              <article
                key={post.id}
                className={`${post.frontmatter.break ? ' break' : ''}`}
              >
                <header>
                  <div>
                    <h3>{post.frontmatter.title}</h3>
                    <p><strong>{post.frontmatter.jobTitle}</strong> {post.frontmatter.startDate} - {post.frontmatter.finishDate}</p>
                  </div>
                </header>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter.description,
                  }}
                />
              </article>
            ))}
        </div>
      </section>
    )
  }
}

ContractorHistory.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ContractorHistoryQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "contract-history" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              html
              fields {
                slug
              }
              frontmatter {
                columns
                title
                jobTitle
                startDate
                finishDate
                description
                tags
                break
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ContractorHistory data={data} count={count} />}
  />
)
