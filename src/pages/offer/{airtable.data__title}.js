import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import LinkButton from "../../components/LinkButton"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import slugify from "slugify"
import Seo from "../../components/Seo"

const CategoryTemplate = ({ data, location }) => {
  const { description, title, image } = data.airtable.data
  const nextCategory = (title, { nodes } = data.allAirtable) => {
    let nextCategory = ""
    nodes = nodes.filter(node => node.data.title !== "Schody")
    for (let i = 0; i < nodes.length; i++) {
      if (title === nodes[i].data.title) {
        if (i === nodes.length - 1) {
          nextCategory = nodes[0].data.title
        } else nextCategory = nodes[i + 1].data.title
      }
    }
    return nextCategory
  }

  const previousCategory = (title, { nodes } = data.allAirtable) => {
    let previousCategory = ""
    nodes = nodes.filter(node => node.data.title !== "Schody")
    for (let i = 0; i < nodes.length; i++) {
      if (title === nodes[i].data.title) {
        if (i === 0) {
          previousCategory = nodes[nodes.length - 1].data.title
        } else previousCategory = nodes[i - 1].data.title
      }
    }
    return previousCategory
  }

  const { t } = useTranslation()

  return (
    <>
      <Seo title={t(title)} description={t(description)} />
      <Layout data={data} location={location}>
        <Wrapper>
          <article className="category-info">
            <h2>
              <Trans>{title}</Trans>
            </h2>
            <p>
              <Trans>{description}</Trans>
            </p>
            <div className="btn-container">
              <LinkButton
                to={`/offer/${slugify(previousCategory(title), {
                  lower: true,
                })}`}
                icon="arrowLeft"
              />
              <LinkButton
                to={`/offer/${slugify(nextCategory(title), {
                  lower: true,
                })}`}
                icon="arrowRight"
              />
            </div>
          </article>
          <section className="img-wrapper">
            {image.localFiles.map((item, index) => {
              return (
                <div className={`div-${index}`} key={index}>
                  <GatsbyImage
                    image={getImage(item)}
                    alt={title}
                    className="img"
                    key={index}
                  />
                </div>
              )
            })}
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query getSingleCategory($data__title: String, $language: String) {
    airtable(data: { title: { eq: $data__title } }) {
      data {
        description
        title
        image {
          localFiles {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "offer-page", "category-page"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allAirtable(
      sort: { fields: data___title, order: ASC }
      filter: { table: { eq: "Categories" } }
    ) {
      nodes {
        data {
          title
        }
      }
    }
  }
`

const Wrapper = styled.section`
  width: 95%;
  display: grid;
  max-width: var(--max-width);
  margin: 0 auto;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr 1.7fr;
  }
  .category-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    margin-bottom: 4rem;

    h2 {
      text-transform: capitalize;
      text-align: center;
      font-size: 2.5rem;
      border-bottom: var(--border-bottom);
      padding-bottom: 2rem;

      @media screen and (min-width: 640px) {
        font-size: 3.5rem;
      }
    }

    p {
      text-align: justify;
      text-justify: inter-word;
      font-size: 1.2rem;
    }
    .btn-container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      position: absolute;
      bottom: 0rem;
      .btn {
        width: 5rem;
      }
    }
  }
  .img-wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
    @media screen and (min-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .img {
      height: 100%;
      width: 100%;
      border-radius: var(--border-radius);
    }

    .div-0 {
      grid-row: span 1.5;
      grid-column: span 1.5;
      @media screen and (min-width: 980px) {
        grid-row: span 2;
        grid-column: span 2;
      }
    }
  }
`
export default CategoryTemplate
