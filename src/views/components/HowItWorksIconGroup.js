import React from 'react'

const HowItWorksIconGroup = ({ title, description, img }) => {
  return (
    <div className="flex flex-column items-center tc w-100 w-third-ns pa4">
      <img className="mb3" src={img} height={75} />
      <div className="serif mb3">{title}</div>
      <div className="fw5 lh-copy ph5">{description}</div>
    </div>
  )
}

export default HowItWorksIconGroup