//i18next-extract-mark-ns-start gallery-page

import React from "react"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import Title from "../components/Title"
import Seo from "../components/Seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GalleryImg from "../components/GalleryImg"
import { useContext } from "react"
import { GatsbyContext } from "../context/context"

const Gallery = ({ data }) => {
  const { nodes: gallery } = data.allAirtableGallery
  const { t } = useTranslation()
  const { selectImage, handleSelectImage } = useContext(GatsbyContext)

  return (
    <>
      <Seo title={t("seo.gallery.title")} description={t("seo.gallery.description")} />
      <Layout data={data}>
        <Wrapper>
          <Title title="Nasze realizacje" />
          {selectImage === null ? null : (
            <GalleryImg dataSelected={selectImage} data={gallery} />
          )}
          <section className="gallery-container">
            {gallery.map(item => {
              const { title, image } = item.data
              const { id } = item

              return (
                <button
                  className="img-container"
                  key={id}
                  onClick={() => handleSelectImage(item)}
                >
                  <GatsbyImage
                    image={getImage(image.localFiles[0])}
                    alt={title}
                    className="img"
                    onClick={() => handleSelectImage(item)}
                  />
                  <div className="img-info ">
                    <h3>
                      <Trans i18nKey={title}>{title}</Trans>
                    </h3>
                  </div>
                </button>
              )
            })}
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AllGallery($language: String) {
    allAirtableGallery(sort: { fields: data___Created, order: DESC }) {
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
        ns: { in: ["translation", "gallery-page"] }
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
const Wrapper = styled.section`
  display: grid;
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
  place-items: center;
  grid-gap: 1rem;

  .gallery-container {
    width: 70%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 250px;
    grid-auto-flow: dense;

    .img-container {
      width: 100%;
      height: 100%;
      position: relative;
      display: grid;
      cursor: pointer;
      box-shadow: var(--dark-shadow);
      border: none;
      border-radius: var(--border-radius);

      .img {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
        transition: opacity 0.3s ease-in-out;
      }
      &:hover .img {
        opacity: 0.3;
      }

      .img-info {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-family: "Poppins";
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        h3 {
          text-transform: capitalize;
          font-size: 1.5rem;
        }
      }
      &:hover .img-info {
        opacity: 1;
      }
    }
  }
`

export default Gallery
