import React from "react"
import styled from "styled-components"
import pl from "../images/flags/pl.svg"
import de from "../images/flags/de.svg"
import gb from "../images/flags/gb.svg"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
import { useI18next, I18nextContext } from "gatsby-plugin-react-i18next"
import { AnimatePresence, motion } from "framer-motion"

const variants = {
  open: { rotateX: 180 },
  closed: { rotateX: 0 },
}

const Lang = () => {
  const context = React.useContext(I18nextContext)
  const { languages, changeLanguage } = useI18next()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper>
      <button className="btn" onClick={() => setIsOpen(!isOpen)} aria-label="Change language" aria-expanded={isOpen}>
        {context.language === "pl" ? (
          <img src={pl} alt="pl" className="img" />
        ) : context.language === "de" ? (
          <img src={de} alt="de" className="img" />
        ) : (
          <img src={gb} alt="gb" className="img" />
        )}
        <motion.div
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          className="icon-container"
        >
          <IoIosArrowDown size={24} className="icon" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.ul
            className="language-container"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            key="ul"
            transition={{
              type: "spring",
              mass: 0.35,
              stiffness: 75,
              duration: 0.3,
            }}
          >
            {languages.flatMap(lng =>
              lng === context.language ? (
                []
              ) : (
                <li key={lng}>
                  <a
                    href="/#"
                    onClick={e => {
                      e.preventDefault()
                      changeLanguage(lng)
                    }}
                  >
                    {lng === "pl" ? (
                      <img src={pl} alt="pl" className="img" />
                    ) : lng === "de" ? (
                      <img src={de} alt="de" className="img" />
                    ) : (
                      <img src={gb} alt="gb" className="img" />
                    )}
                  </a>
                </li>
              )
            )}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;

  .icon-container {
    width: 100%;
    display: grid;
    place-items: center;

    .icon {
      color: var(--clr-grey-1);
    }
  }
  .btn {
    display: flex;
    width: 100%;
    height: 2rem;
    background: transparent;
    align-items: center;
    border: none;
    cursor: pointer;
  }
  .language-container {
    height: 5rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    z-index: 1000;
    background-color: var(--clr-secondary-brown);
  }
  .img {
    width: 2rem;
    height: 1.5rem;
    padding: 0.1rem;
  }
`
export default Lang
