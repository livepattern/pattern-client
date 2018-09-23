import React from "react"
import logo from "../../images/logo.png"
import { PHONE_NUMBER, EMAIL } from "../../vars"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Contact = ({ phone_text, email_text }) => {
  return (
    <span>
      <a className="underline-hover mr2 b" href={`tel:${PHONE_NUMBER}`}>
        {phone_text}
      </a>{" "}
      |
      <a className="underline-hover ml2 b" href={`mailto:${EMAIL}`}>
        {email_text}
      </a>
    </span>
  )
}

const Header = () => {
  return (
    <div className="hide-when-modal-open flex h3 justify-between ph3 ph5-l items-center sans fixed bg-white w-100 top-0 z-5">
      <Link to="/">
        <img src={logo} width={120} />
      </Link>
      <span className="dn-ns">
        {<Contact phone_text="Call" email_text="Email" />}
      </span>
      <span className="dn db-l db-m">
        {<Contact phone_text={PHONE_NUMBER} email_text={EMAIL} />}
      </span>
    </div>
  )
}

export default Header
