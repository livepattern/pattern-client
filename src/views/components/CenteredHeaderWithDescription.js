import React from "react"
import classNames from "classnames"

const CenteredHeaderWithDescription = ({
  header,
  description,
  textSize = "f2",
  id
}) => {
  const header_classes = classNames({
    "tc serif mb3 pt5 b f2-ns f4 f3-m": true,
    [textSize]: true
  })
  return (
    <div id={id} className="flex flex-column items-center">
      <div className={header_classes}>{header}</div>
      <div className="tc fw5 mb5 measure lh-copy ph3">{description}</div>
    </div>
  )
}

export default CenteredHeaderWithDescription
