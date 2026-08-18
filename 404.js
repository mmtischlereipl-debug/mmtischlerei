//i18next-extract-mark-ns-start 404-page

import * as React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import LinkButton from "../components/LinkButton"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <h1>
        <Trans>Nie znaleziono strony</Trans>
      </h1>
      <LinkButton text="Wróć" to="/" />
    </Wrapper>
  </Layout>
)

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "404-page"] }
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
  width: 95%;
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2rem;
  height: 100vh;
`

export default NotFoundPage
