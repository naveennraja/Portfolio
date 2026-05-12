import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ title, description }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const meta = site.siteMetadata
  const metaDescription = description || meta.description
  const fullTitle = `${title} | ${meta.title}`
  const ogImage = `${meta.siteUrl}/icons/icon-512x512.png`

  return (
    <>
      <title>{fullTitle}</title>
      <html lang="en" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={meta.author} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
    </>
  )
}
