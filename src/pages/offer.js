//i18next-extract-mark-ns-start offer-page

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import Category from "../components/Category"
import Project from "../components/Project"
import Title from "../components/Title"
import Seo from "../components/Seo"
const Offer = ({ data }) => {
  const {
    allAirtable: { nodes: categories },
  } = data

  const { t } = useTranslation()
  return (
    <>
      <Seo
        title={t("seo.offer.title")}
        description={t("seo.offer.description")}
      />
      <Layout data={data}>
        <Wrapper>
          <div className="img-container">
            <StaticImage
              src="../images/tools.jpg"
              layout="constrained"
              placeholder="traced-svg"
              className="img"
              alt="tools"
            />
            <div className="offer-info">
              <h2>
                <Trans>
                  Poza ofertą poniżej oferujemy szeroko pojęte usługi
                  stolarskie. Zachęcamy do kontaktu telefonicznego.
                </Trans>
              </h2>
            </div>
          </div>
          <Title title="Meble na wymiar" />
          <Project />
          <Category categories={categories.filter(category => category.data.title !== "Schody")} />
          {/* <Title title="Usługi stolarskie" /> */}
        </Wrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query allOffers($language: String) {
    allAirtable(
      sort: { fields: data___title, order: ASC }
      filter: { table: { eq: "Categories" } }
    ) {
      nodes {
        data {
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
        id
      }
    }
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "offer-page"] }
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
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: var(--max-width);
  place-items: center;
  align-items: center;
  grid-gap: 3rem;
  margin: 0 auto 5rem auto;

  h1 {
    border-bottom: var(--border-bottom);
    padding-bottom: 1rem;
  }

  .drag {
    width: 200px;
    height: 200px;
    background-color: red;
  }

  .img-container {
    position: relative;
    width: 95%;
    height: 20rem;
    border-bottom: var(--border-bottom);
    .img {
      width: 100%;
      height: 90%;
      border-radius: var(--border-radius);
      opacity: 0.3;
    }
    .offer-info {
      position: absolute;
      border-radius: var(--border-radius);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      padding: 2rem;

      h2 {
        text-align: center;
        font-size: 1.2rem;
        line-height: 2rem;
        @media screen and (min-width: 980px) {
          font-size: 2.5rem;
          line-height: 4rem;
        }
      }
    }
  }
`

export default Offer
