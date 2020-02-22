import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const node = posts[0]
    return (
      <div className="flex flex-wrap">
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className={(index ===0 ? '' : '') + " w-full flex flex-wrap" }key={post.id}>
              <article className="flex flex-wrap flex-row-reverse border-b mb-4">
                <header className={index===0 ? 'w-full' : 'w-64'}>
                  {post.frontmatter.featuredimage ? (
                    <div style={{height: '12rem', overflow: 'hidden'}} className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  {index>0 && <span className="text-gray-700 mt-4 text-xs float-right">
                      {post.frontmatter.date} - 2 mins Read
                    </span>}
                </header>
                <div className={"flex-1 flex-grow " + (index > 0 ? 'pr-4' : '')}>
                  <p className="w-full mt-4">
                    <Link className={"text-blue-900 " + (index===0?'text-xl' : 'text-lg')} to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    {index===0 && <span className="text-gray-700 text-xs float-right">
                      {post.frontmatter.date}
                    </span>}
                  </p>
                  <p className="text-gray-700 leading-loose text-sm mt-1">
                    {post.excerpt}
                  </p>
                  <div className="w-full">
                    <Link className="mb-4 mt-2 inline-block bg-blue-800 text-blue-100 hover:bg-blue-900 text:bg-blue-200 rounded-sm px-4 py-2" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 540, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
