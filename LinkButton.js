import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link, Trans } from "gatsby-plugin-react-i18next"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

const LinkButton = ({ text, to, icon, lang }) => {
  return (
    <Link to={to}>
      <Wrapper
        whileHover={{
          backgroundColor: "#7f5539",
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        {icon === "arrowLeft" ? <BsArrowLeftShort className="icon" /> : null}
        <Trans>{text}</Trans>
        {icon === "arrowRight" ? <BsArrowRightShort className="icon" /> : null}
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled(motion.button)`
  width: auto;
  height: 3rem;
  background: var(--clr-primary-brown);
  padding: 0 2rem;
  font-size: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1.5rem;
  cursor: pointer;
  letter-spacing: 0.1rem;
  color: var(--clr-white);
  .icon {
    width: 2.5rem;
    height: auto;
  }
`

export default LinkButton
