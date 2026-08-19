import React from "react"
import styled from "styled-components"
import { BsFillTelephoneFill } from "react-icons/bs"
import pageLinks from "../constants/links"
import { AiOutlineMenu } from "react-icons/ai"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import Language from "./Language"

const Navbar = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <div className="nav-header">
        <Link to="/" aria-label="M&M Tischlerei - Home" className="wordmark">
          <strong>M&M</strong><span>Tischlerei</span>
        </Link>
        <div className="nav-contact">
          <div className="nav-contact-option">
            <BsFillTelephoneFill size={24} />
            <a href="tel:+48791756101">+48 791 756 101</a>
          </div>
        </div>
      </div>
      <button className="btn-menu" onClick={toggleSidebar} aria-label="Open menu">
        <AiOutlineMenu className="burger" />
      </button>
      <div className="nav-links">
        {pageLinks.map(link => {
          const { id, text, url } = link
          return (
            <Link key={id} to={url} className="btn">
              <Trans>{text}</Trans>
            </Link>
          )
        })}
        <Link to="/contact/#quote" className="btn quote"><Trans>Bezpłatna wycena</Trans></Link>
      </div>
      <div className="lang">
        <Language />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: grid; position:relative; z-index:100;
  margin: 0 auto;
  padding: 1rem 4%;
  width: 100%;
  background:#11100f;color:white;
  grid-template-columns: 1fr;
  align-items: center;
  @media screen and (min-width: 980px) {
    grid-template-columns: 1fr 2fr auto;
  }

  .nav-header {
    display: flex;
    flex-direction: row;
    gap: 2rem;align-items:center;
    .wordmark{display:flex;align-items:baseline;gap:.5rem;color:white}.wordmark strong{font-family:Georgia,serif;font-size:1.85rem;font-weight:400}.wordmark span{text-transform:uppercase;letter-spacing:.2em;font-size:.62rem;color:#b77554}

    .nav-contact {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      .nav-contact-option {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        a,
        p {
          font-size: 0.8rem;color:white;
          margin: 0;
          font-weight: bold;

          @media screen and (min-width: 640px) {
            font-size: 1rem;
          }
        }
      }
    }
  }

  .btn-menu {
    background: none;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    .burger {
      width: 2rem;
      height: auto;
      color: #b77554;
    }
    @media screen and (min-width: 980px) {
      display: none;
    }
  }
  .nav-links {
    display: none;

    @media screen and (min-width: 980px) {
      display: flex;
      gap: 1.5rem;
      letter-spacing: 0.2rem;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.8rem;
    }

    @media screen and (min-width: 1250px) {
      font-size: 1rem;
      gap: 2rem;
    }

    .btn {
      transition: var(--transition);

      &:hover {
        color: #d18b67;
        box-shadow: 0px 2px #b08968;
      }
    }
    .quote {
      background: #b77554;
      color: white;
      padding: 0.65rem 0.9rem;
      border-radius: 0;
      white-space: nowrap;
      &:hover { color: white; background: #7f5539; box-shadow: none; }
    }
  }
  .lang {
    position: absolute;
    top: 4rem;
    right: 1rem;
    @media screen and (min-width: 980px) {
      position:static;
    }
  }
`

export default Navbar
