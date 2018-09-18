import React from 'react'
import classNames from 'classnames'

const CenteredHeaderWithDescription = ({ header, description, textSize="f2" }) => {
  const header_classes = classNames({
    "tc serif mb3 pt5": true,
    [textSize]: true,
  })
  return (
    <div className="flex flex-column items-center">
      <div className={header_classes}>{header}</div>
      <div className="tc fw3 mb5 measure lh-copy">{description}</div>
    </div>
  )
}

export default CenteredHeaderWithDescription