import React from "react"
import { createGlobalStyle } from "styled-components"
import { GatsbyProvider } from "./src/context/context"
import "@fontsource/poppins"
import { AnimatePresence } from "framer-motion"
const GlobalStyle = createGlobalStyle`
/*
===============
Variables
===============
*/

:root {
  --clr-primary-brown: #b77554;
  --clr-secondary-brown: #e8ddd2;
  --clr-background-grey: #f4f1ec;

  /* lighter shades of primary color */
  --clr-primary-6: hsl(21, 57%, 50%);
  --clr-primary-7: hsl(21, 65%, 59%);
  --clr-primary-8: hsl(21, 80%, 74%);
  --clr-primary-9: hsl(21, 94%, 87%);
  --clr-primary-10: hsl(21, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --border-bottom: 2px solid var(--clr-primary-brown);
  --border-radius: 2px;
  --max-width: 1440px;
}
/*
===============
Global Styles
===============
*/
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--clr-background-grey);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
  font-family: "Poppins",Arial,sans-serif;
  margin: 0rem auto;
}
:focus-visible {
  outline: 3px solid #7f5539;
  outline-offset: 3px;
}
button, a, input, select, textarea {
  -webkit-tap-highlight-color: transparent;
}
@media screen and (max-width: 480px) {
  body { padding-bottom: 4.75rem; }
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: var(--clr-grey-3);
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1,h2 { text-wrap: balance; }
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
    font-weight: bold;
  }
}
/*  global classes */

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <GatsbyProvider>
        <AnimatePresence exitBeforeEnter>{element} </AnimatePresence>
      </GatsbyProvider>
    </>
  )
}
