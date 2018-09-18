import React from "react"
import Stepper from './components/stepper'

const Row = ({ product, description, unitCost, totalCost }) => {
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
        <Stepper />
      </td>
      <td className="pa3 tr">
        ${unitCost}
        .00
      </td>
    </tr>
  )
}

const Order = () => {
  return (
    <div className="mt6">
      <div className="tc f3 serif mb5">
        Lease furniture for your office space
      </div>
      <div className="bg-near-white mr5 ml5 pa3">
        {/* Row */}
        <table className="f5 w-100 mw8 center" cellSpacing="0">
          <tbody className="lh-copy b">
            <Row product="Chair" unitCost="50" />
            <Row product="Desk" unitCost="100" />
            <Row product="Conference Table" unitCost="100" />
            <Row
              product="Lean Machine Package"
              description="3 desks, 3 chairs"
              unitCost="150"
            />
            <Row
              product="Team Building Package"
              description="10 desks, 15 chairs, 1 conference table"
              unitCost="250"
            />
            <Row
              product="New Branch Package"
              description="A bunch of stuff"
              unitCost="550"
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order
