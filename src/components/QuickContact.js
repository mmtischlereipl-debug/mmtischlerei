import React from "react"
import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"
import { BsTelephoneFill } from "react-icons/bs"
import { Trans } from "gatsby-plugin-react-i18next"

const PHONE = "48791756101"

const QuickContact = () => (
  <Wrapper aria-label="Quick contact">
    <a
      className="contact whatsapp"
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp M&M Tischlerei"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
    <a className="contact phone" href={`tel:+${PHONE}`} aria-label="+48 791 756 101">
      <BsTelephoneFill aria-hidden="true" />
      <span><Trans>Zadzwoń</Trans></span>
    </a>
  </Wrapper>
)

const Wrapper = styled.aside`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 900;
  display: flex;
  gap: 0.5rem;
  .contact {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.7rem 0.9rem;
    border-radius: 999px;
    color: #fff;
    font-weight: 700;
    box-shadow: var(--dark-shadow);
    transition: transform 0.2s ease;
    &:hover, &:focus-visible { transform: translateY(-2px); }
    svg { font-size: 1.25rem; }
  }
  .whatsapp { background: #187b3f; }
  .phone { background: #b77554; }
  @media (max-width: 480px) {
    left: 0.75rem;
    right: 0.75rem;
    bottom: 0.75rem;
    .contact { flex: 1; justify-content: center; }
  }
`

export default QuickContact
