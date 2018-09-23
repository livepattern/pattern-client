import React from "react"
import Stepper from "./stepper"

const OrderRowMobile = ({
  increment,
  decrement,
  quantity,
  calculatedCost,
  product
}) => {
  return (
    <tr>
      <td className="pv3 b">{product}</td>
      <td className="b">
        <Stepper
          increment={increment}
          decrement={decrement}
          quantity={quantity}
        />
      </td>
      <td className="tr">
        <span className="b">${calculatedCost}</span> <span className="f7">CAN</span>
      </td>
    </tr>
  )
}

export default OrderRowMobile
