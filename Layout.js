import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import { useState } from "react"
import { motion } from "framer-motion"
import QuickContact from "./QuickContact"

const Layout = ({ children, data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} data={data} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} data={data} />
      <motion.main
        key={children}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </motion.main>
      <QuickContact />
      <Footer data={data} />
    </>
  )
}

export default Layout
