import React from "react"
import Stepper from "./Stepper"

const OrderRow = ({
  product,
  description,
  unitCost,
  increment,
  decrement,
  quantity,
  totalCost
}) => {
  return (
    <tr>
      <td className="pa3">
        <div className=" w3 h2 bg-gray" />
      </td>
      <td className="pa3">
        {product}
        <div className="f6 normal">{description}</div>
      </td>
      <td className="pa3 tr">
        ${unitCost}
        .00
      </td>
      <td className="pa3">
        <Stepper
          increment={increment}
          decrement={decrement}
          quantity={quantity}
        />
      </td>
      <td className="pa3 tr">
        ${totalCost}
        .00
      </td>
    </tr>
  )
}

export default OrderRow
