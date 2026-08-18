import React from "react"
import GoogleMapReact from "google-map-react"
import GooglePin from "./GooglePin"
import styled from "styled-components"

const defaultProps = {
  center: {
    lat: 51.961025,
    lng: 14.776403,
  },
  zoom: 13,
}

const GoogleMap = () => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLEMAPS_API }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
    >
      <GooglePin
        lat={51.96317526929887}
        lng={14.796558939908518}
        text={"M&M Tischlerei"}
      />
    </GoogleMapReact>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 30rem;
`

export default GoogleMap
