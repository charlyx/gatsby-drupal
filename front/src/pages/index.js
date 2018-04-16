import React from 'react'
import Link from 'gatsby-link'

export const IndexPage = ({ data }) => (
  <div>
    {JSON.stringify(data)}
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const query = graphql`
query AllBlockBlockEdgesNodeId {
  allBlockBlock {
    edges {
      node {
        id
      }
    }
  }
}
`

export default IndexPage
