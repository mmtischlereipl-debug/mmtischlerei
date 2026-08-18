import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation()
  const { language } = useI18next()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata

  const cleanPath = pathname.replace(/^\/(de|pl|en)(?=\/|$)/, "") || "/"
  const canonicalPath = language === "pl" ? cleanPath : `/${language}${cleanPath}`
  const withSiteUrl = path => `${siteUrl}${path}`.replace(/\/$/, "/")

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    siteUrl: withSiteUrl(canonicalPath),
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{ lang: language }}
    >
      <link rel="canonical" href={seo.siteUrl} />
      <link rel="alternate" hrefLang="pl" href={withSiteUrl(cleanPath)} />
      <link rel="alternate" hrefLang="de" href={withSiteUrl(`/de${cleanPath}`)} />
      <link rel="alternate" hrefLang="en" href={withSiteUrl(`/en${cleanPath}`)} />
      <link rel="alternate" hrefLang="x-default" href={withSiteUrl(cleanPath)} />
      <meta name="description" content={seo.description} />
      <meta
        name="google-site-verification"
        content="42M8zWHLNoeYAP-cFLq4cgmIGnaEAhBrjaU6uTDsv_8"
      />
      <meta name="image" content={seo.image} />

      {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={language === "de" ? "de_DE" : language === "en" ? "en_GB" : "pl_PL"} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "M&M Tischlerei",
        url: siteUrl,
        telephone: "+48 791 756 101",
        email: "mmtischlereipl@gmail.com",
        address: { "@type": "PostalAddress", streetAddress: "Kolonia Wałowice 74b", postalCode: "66-620", addressLocality: "Gubin", addressCountry: "PL" },
        sameAs: ["https://www.facebook.com/MM-Tischlerei-106100201919094/"]
      })}</script>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
      }
    }
  }
`
