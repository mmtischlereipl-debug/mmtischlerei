import React from "react"
import styled from "styled-components"
import { HiLocationMarker } from "react-icons/hi"

const GooglePin = ({ text }) => {
  return (
    <Wrapper>
      <HiLocationMarker className="icon" />
      <p>{text}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;

  .icon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: #e63946;
  }

  p {
    display: inline;
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    margin: 0;
    font-weight: bold;
  }
`

export default GooglePin
