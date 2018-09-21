import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from "../../images/logo.png"

const Footer = () => {
  return (
    <div className="flex flex-column-reverse flex-row-ns justify-around h4 items-center light-yellow-bg">
      <Link to="/">
        <img src={logo} width={100} />
      </Link>
      <div className="flex flex-column flex-row-l">
        <div className="center mb2 mb0-l mb4">
          <AnchorLink
            className="mr3 underline-hover nowrap"
            href="#furnish-your-space"
            offset="50"
          >
            Furnish your space
          </AnchorLink>
          <AnchorLink
            className="mr3 underline-hover nowrap"
            href="#how-it-works"
            offset="50"
          >
            How it Works
          </AnchorLink>
          <Link className="underline-hover mr3 nowrap" to="/terms&conditions">
            Terms & Conditions
          </Link>
        </div>
        <div className="center">
          <a className="underline-hover mr2 b" href="tel:1-562-867-5309">
            1-555-444-5555
          </a>{" "}
          |
          <a
            className="underline-hover ml2 b"
            href="mailto:contact@livepattern.com"
          >
            contact@livepattern.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
