import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs"
import pageLinks from "../constants/links"
import { AiOutlineMenu } from "react-icons/ai"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import Language from "./Language"

const Navbar = ({ toggleSidebar }) => {
  return (
    <Wrapper>
      <div className="nav-header">
        <Link to="/" aria-label="M&M Tischlerei - Home">
          <StaticImage
            src="../images/logo.jpg"
            width={75}
            height={75}
            alt="logo"
          />
        </Link>
        <div className="nav-contact">
          <div className="nav-contact-option">
            <BsFillTelephoneFill size={24} />
            <a href="tel:+48791756101">+48 791 756 101</a>
          </div>
          <div className="nav-contact-option">
            <BsFillEnvelopeFill size={24} />
            <a href="mailto:mmtischlereipl@gmail.com">mmtischlereipl@gmail.com</a>
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
  display: grid;
  margin: 1.5rem auto 2rem auto;
  width: 95%;
  max-width: var(--max-width);
  grid-template-columns: 1fr;
  align-items: center;
  @media screen and (min-width: 980px) {
    grid-template-columns: 2fr 1fr;
  }

  .nav-header {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding-bottom: 10px;
    border-bottom: var(--border-bottom);

    .nav-contact {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .nav-contact-option {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        a,
        p {
          font-size: 0.7rem;
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
      color: var(--clr-primary-brown);
    }
    @media screen and (min-width: 980px) {
      display: none;
    }
  }
  .nav-links {
    display: none;

    @media screen and (min-width: 980px) {
      display: flex;
      gap: 1rem;
      letter-spacing: 0.2rem;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
    }

    @media screen and (min-width: 1250px) {
      font-size: 1rem;
      gap: 2rem;
    }

    .btn {
      transition: var(--transition);

      &:hover {
        color: var(--clr-primary-brown);
        box-shadow: 0px 2px #b08968;
      }
    }
    .quote {
      background: var(--clr-primary-brown);
      color: white;
      padding: 0.65rem 0.9rem;
      border-radius: var(--border-radius);
      white-space: nowrap;
      &:hover { color: white; background: #7f5539; box-shadow: none; }
    }
  }
  .lang {
    position: absolute;
    top: 4rem;
    right: 1rem;
    @media screen and (min-width: 980px) {
      top: 1rem;
      right: 1rem;
    }
  }
`

export default Navbar
