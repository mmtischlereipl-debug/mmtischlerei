import React from "react"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  const [selectImage, setSelectImage] = React.useState(null)

  const handleSelectImage = data => {
    setSelectImage(data)
  }

  return (
    <GatsbyContext.Provider value={{ selectImage, handleSelectImage }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
