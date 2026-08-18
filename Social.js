import React from "react"
import socialLinks from "../constants/social-links"
import styled from "styled-components"
const Social = () => {
  return (
    <Wrapper>
      {socialLinks.map(link => {
        return (
          <a href={link.url} key={link.id} className="social-link" target="_blank" rel="noreferrer" aria-label={link.url.includes("facebook") ? "Facebook" : "Instagram"}>
            {link.icon}
          </a>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;

  .social-link {
    width: 2rem;
    height: 2rem;
    .social-icon {
      width: 100%;
      height: 100%;
      color: var(--clr-secondary-brown);
      transition: all 0.2s linear;

      &:hover {
        color: #7f5539;
      }
    }
  }
`

export default Social
