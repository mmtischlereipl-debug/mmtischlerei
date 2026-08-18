import React from "react"
import styled from "styled-components"
import Social from "./Social"
import { Link, Trans } from "gatsby-plugin-react-i18next"
const Footer = () => {
  return (
    <Wrapper>
      <div><strong>M&M Tischlerei</strong><a href="tel:+48791756101">+48 791 756 101</a><a href="mailto:mmtischlereipl@gmail.com">mmtischlereipl@gmail.com</a></div>
      <nav aria-label="Footer"><Link to="/offer/"><Trans>Oferta</Trans></Link><Link to="/gallery/"><Trans>Galeria</Trans></Link><Link to="/contact/#quote"><Trans>Bezpłatna wycena</Trans></Link></nav>
      <div><Social /><p>© {new Date().getFullYear()} M&M Tischlerei</p></div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  min-height: 10rem;
  background-color: var(--clr-primary-brown);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2rem;
  place-items: center;
  padding: 2rem max(2.5%, 1rem);
  > div, nav { display: flex; flex-direction: column; gap: .45rem; align-items: center; text-align: center; }
  a, strong { color: var(--clr-secondary-brown); }

  p {
    margin: 0;
    letter-spacing: 0.2rem;
    color: var(--clr-secondary-brown);
  }
  @media(max-width: 700px) { grid-template-columns: 1fr; gap: 1.5rem; }
`

export default Footer
