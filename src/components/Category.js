import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import { motion } from "framer-motion"
import slugify from "slugify"
import { FaArrowRight } from "react-icons/fa"
import { getOfferImage } from "../constants/offerImages"
const Category = ({ categories }) => {
  return (
    <Wrapper>
      {categories.map(category => {
        const { id } = category
        const { title, image } = category.data
        const offerImage = getOfferImage(title)
        return (
          <Link
            to={`/offer/${slugify(title, {
              lower: true,
            })}`}
            key={id}
          >
            <motion.div
              className="category-container"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 1 }}
            >
              {offerImage ? (
                <img src={offerImage} alt={title} className="img" />
              ) : (
                <GatsbyImage
                  image={getImage(image?.localFiles?.[0])}
                  alt={title}
                  className="img"
                />
              )}
              <div className="img-info">
                <div><small><Trans>Meble na wymiar</Trans></small><p>
                  <Trans>{title}</Trans>
                </p></div><FaArrowRight />
              </div>
            </motion.div>
          </Link>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: .75rem;
  grid-template-columns: 1fr;
  grid-auto-rows: 340px;
  grid-auto-flow: dense;

  @media screen and (min-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 380px;
  }

  @media screen and (min-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 420px;
  }

  .category-container {
    width: 100%;
    height: 100%;
    display: grid;
    cursor: pointer;
    background:#161412;
    border: none;
    border-radius: 0;
    grid-template-rows: 1fr auto;

    .img {
      border-radius: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .img-info {
      display:flex;align-items:center;justify-content:space-between;gap:1rem;
      padding:1.1rem 1.2rem;
      height: auto;background:#161412;color:white;
      border-radius: 0;

      p {
        font-family:Georgia,serif;font-size: 1.35rem;font-weight:400;
        text-align: left;letter-spacing: 0;
        border-radius: 0;
        margin: 0;
        }
      small{display:block;color:#d18b67;text-transform:uppercase;letter-spacing:.14em;font-size:.6rem;margin-bottom:.35rem}
      svg{color:#d18b67;flex:0 0 auto}
    }
  }
`

export default Category
