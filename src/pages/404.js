import React from "react"
import MainLayout from "../components/MainLayout"
import SEO from "../components/gatsby-components/seo"

export function Head() {
  return <SEO title="404: Not found" />
}

const NotFoundPage = () => (
  <MainLayout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainLayout>
)

export default NotFoundPage
