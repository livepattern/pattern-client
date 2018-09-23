import React from "react"
import Stepper from "./stepper"

const OrderRow = ({
  product,
  description,
  calculatedCost,
  increment,
  decrement,
  quantity,
  totalCost
}) => {
  return (
    <tr>
      <td className="pa3 b">
        {product}
        <div className="f6 normal">{description}</div>
      </td>
      <td className="pa3 tr b">
        ${calculatedCost}
        .00
      </td>
      <td className="pa3 b">
        <Stepper
          increment={increment}
          decrement={decrement}
          quantity={quantity}
        />
      </td>
      <td className="pa3 tr nowrap">
        <span className="b">${totalCost}.00</span>{" "}
        <span className="f7">CAN</span>
      </td>
    </tr>
  )
}

export default OrderRow
