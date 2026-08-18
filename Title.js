import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h1>
        <Trans>{title}</Trans>
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    border-bottom: var(--border-bottom);
    padding-bottom: 1rem;
    display: inline-block;
    text-transform: capitalize;
  }
`

export default Title
