import React from 'react'
import TC from './TC'
import Button from "./Button"

const Form = ({
  onSubmit,
}) => {
  return (
    <div className="flex justify-center">
      <form className="flex flex-column items-center mb5 bg-white w-90 w-60-m w-60-l pa3">

        <label className="w-100 pa3">
          <input type="email" name="email" placeholder="Email Address" />
        </label>
        <label className="w-100 pa3">
          <textarea name="message" placeholder="Message (optional)" />
        </label>
        <TC />

        <Button text="Contact us with your order" onClick={onSubmit} />
      </form>
    </div>
  )
}

export default Form