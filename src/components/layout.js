/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Nav from "./Nav"
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Topography"

// import "./layout.css"

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />

      <ContentStyles>
        <Nav />
        {children}
      </ContentStyles>
    </>
  )
}

export default Layout
