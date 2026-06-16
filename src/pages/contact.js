//i18next-extract-mark-ns-start contact-page

import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import Title from "../components/Title"
import { motion } from "framer-motion"
import GoogleMap from "../components/GoogleMap"
const Contact = ({ data }) => {
  const { t } = useTranslation()
  return (
    <>
      <Seo
        title={t("seo.contact.title")}
        description={t("seo.contact.description")}
      />
      <Layout data={data}>
        <Wrapper>
          <div className="contact-container">
            <section className="contact-info">
              <Title title="Kontakt" />
              <h4>
                <Trans>Telefon (polski, niemiecki, angielski):</Trans>
              </h4>
              <p>+48 791 756 101</p>
              <h4>E-mail:</h4>
              <p>mmtischlereipl@gmail.com</p>
              <h4>
                <Trans>Dane firmy:</Trans>
              </h4>
              <p>
                M&M Tischlerei S.C. Tomasz Dolecki, Andrzej Abramczyk
                <br />
                66-620 Gubin, Polska,
                <br />
                Kolonia Wałowice 74b
              </p>
            </section>
            <section>
              <form
                className="form contact-form"
                action={process.env.GATSBY_FORM_KEY}
                method="POST"
              >
                <h2>
                  <Trans>Co możemy dla Ciebie zrobić?</Trans>
                </h2>
                <div className="form-row">
                  <label htmlFor="name">
                    <Trans>Twoje Imię</Trans>
                  </label>
                  <input type="text" name="name" id="name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email">
                    <Trans>Telefon</Trans>
                  </label>
                  <input type="text" name="phone" id="phone" required />
                </div>
                <div className="form-row">
                  <label htmlFor="message">
                    <Trans>Wiadomość</Trans>
                  </label>
                  <textarea name="message" id="message" required></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn"
                  whileHover={{
                    backgroundColor: "#7f5539",
                    transition: { duration: 0.2 },
                  }}
                >
                  <Trans>Wyślij</Trans>
                </motion.button>
              </form>
            </section>
          </div>
          <GoogleMap />
        </Wrapper>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "contact-page"] }
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
  grid-template-columns: 1fr;
  width: 95%;
  margin: 0 auto;
  max-width: var(--max-width);
  grid-gap: 2rem;

  .contact-container {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr;

    @media screen and (min-width: 980px) {
      grid-template-columns: 2fr 1.5fr;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      p {
      }
    }
    .form {
      display: grid;
      background: var(--clr-secondary-brown);
      padding: 2rem;
      border-radius: var(--border-radius);
      width: 100%;
      box-shadow: var(--dark-shadow);

      h2 {
        text-align: center;
        line-height: 3rem;
      }

      .btn {
        background-color: var(--clr-primary-brown);
        border: none;
        border-radius: var(--border-radius);
        font-size: 1.5rem;
        color: var(--clr-primary-brown);
        cursor: pointer;
        color: var(--clr-white);
        letter-spacing: 0.1rem;
        height: 3rem;
      }
      label {
        display: block;
        margin-bottom: 0.3rem;
      }

      .form-row {
        width: 100%;
        margin-bottom: 1rem;
        input {
          font-size: 1.3rem;
        }

        input,
        textarea {
          background: var(--clr-grey-10);
          border-radius: var(--border-radius);
          width: 100%;
          height: 3rem;
          border: 1px solid var(--clr-grey-8);
          padding: 0.2rem 0.5rem;

          &:focus {
            outline: none;
            border: 2px solid var(--clr-primary-brown);
          }
        }
        textarea {
          min-height: 8rem;
          max-height: 32rem;
          font-size: 1.1rem;
          resize: vertical;
        }
      }
    }
  }
`

export default Contact
