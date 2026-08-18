import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Trans } from "gatsby-plugin-react-i18next"
const Project = () => {
  return (
    <Wrapper>
      <div className="project-wrapper">
        <StaticImage
          src="../images/project.jpg"
          layout="constrained"
          placeholder="blurred"
          className="img"
          alt="3d project"
        />
        <div className="project-info">
          <h2>
            <Trans>Profesjonalny projekt 3D</Trans>
          </h2>
          <p>
            <Trans>
              Dzięki specjalistycznemu oprogramowaniu jesteśmy w stanie państwu
              zapewnić precyzję i szybkość wykonania.
            </Trans>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 80%;
  display: grid;
  place-items: center;

  .project-wrapper {
    position: relative;
    width: 100%;
    height: 20rem;
    display: grid;
    .img {
      width: 100%;
      height: 100%;
      opacity: 0.2;
      border-radius: var(--border-radius);
    }
    .project-info {
      position: absolute;
      width: 40%;
      text-align: justify;
      text-justify: inter-word;
      display: grid;
      grid-gap: 1rem;
      padding: 1rem;
      font-size: 0.8rem;
      @media screen and (min-width: 480px) {
        font-size: 1rem;
        padding: 2rem;
      }

      @media screen and (min-width: 980px) {
        font-size: 1.2rem;
      }
    }
  }
`

export default Project
