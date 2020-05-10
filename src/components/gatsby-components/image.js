import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)|(gif)/"}, relativeDirectory: {eq: "skills"}}) {
          edges {
            node {
              relativePath name childImageSharp {
                fluid(maxWidth: 200 ) { src}
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image)  return null
      const imageFluid = image.node.childImageSharp.fluid
      console.log(imageFluid);
      return <Img alt={props.altText} title={props.altText} fluid={imageFluid}  className={props.className} />
    }}
  />
)
export default Image