import React, { Component } from "react"
import OrderRow from "./components/OrderRow"
import CenteredHeaderWithDescription from './components/CenteredHeaderWithDescription'

class Order extends Component {
  constructor() {
    super()
    this.state = {
      chair: { quantity: 0, unitCost: 50 },
      desk: { quantity: 0, unitCost: 75 },
      conference_table: { quantity: 0, unitCost: 100 },
      package_lean: { quantity: 0, unitCost: 150 },
      package_team: { quantity: 0, unitCost: 250 },
      package_branch: { quantity: 0, unitCost: 550 }
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.calculateTotalCostForRow = this.calculateTotalCostForRow.bind(this)
  }

  increment = product => () => {
    const new_product_quantity = Object.assign({}, this.state[product], {
      quantity: this.state[product].quantity + 1
    })

    this.setState({ [product]: new_product_quantity })
  }

  decrement = product => () => {
    const new_product_quantity = Object.assign({}, this.state[product], {
      quantity: Math.max(this.state[product].quantity - 1, 0)
    })

    this.setState({ [product]: new_product_quantity })
  }

  calculateTotalCostForRow(product) {
    let totalCost = this.state[product].quantity * this.state[product].unitCost
    return totalCost
  }

  calculateTotalQuantity() {
    let quantity = Object.keys(this.state).reduce((result, key) => {
      result = this.state[key].quantity + result
      return result
    }, 0)

    return quantity
  }

  calculateTotalCost() {
    let totalCost = Object.keys(this.state).reduce((result, key) => {
      result = this.calculateTotalCostForRow(key) + result
      return result
    }, 0)

    return totalCost
  }

  render() {
    return (
      <div className="mt4">
      <CenteredHeaderWithDescription header="Lease furniture for your office space" textSize="f2" />
        <div className="bg-near-white mr5-ns ml5-ns pa3-ns mb4">
          {/* Row */}
          <table className="f5 w-100 mw8 center" cellSpacing="0">
            <tbody className="lh-copy b">
              <OrderRow
                product="Chair"
                unitCost={this.state.chair.unitCost}
                quantity={this.state.chair.quantity}
                increment={this.increment("chair")}
                decrement={this.decrement("chair")}
                totalCost={this.calculateTotalCostForRow("chair")}
              />
              <OrderRow
                product="Desk"
                unitCost={this.state.desk.unitCost}
                quantity={this.state.desk.quantity}
                increment={this.increment("desk")}
                decrement={this.decrement("desk")}
                totalCost={this.calculateTotalCostForRow("desk")}
              />
              <OrderRow
                product="Conference Table"
                unitCost={this.state.conference_table.unitCost}
                quantity={this.state.conference_table.quantity}
                increment={this.increment("conference_table")}
                decrement={this.decrement("conference_table")}
                totalCost={this.calculateTotalCostForRow("conference_table")}
              />
              <OrderRow
                product="Lean Machine Package"
                description="3 desks, 3 chairs"
                unitCost={this.state.package_lean.unitCost}
                quantity={this.state.package_lean.quantity}
                increment={this.increment("package_lean")}
                decrement={this.decrement("package_lean")}
                totalCost={this.calculateTotalCostForRow("package_lean")}
              />
              <OrderRow
                product="Team Building Package"
                description="10 desks, 15 chairs, 1 conference table"
                unitCost={this.state.package_team.unitCost}
                quantity={this.state.package_team.quantity}
                increment={this.increment("package_team")}
                decrement={this.decrement("package_team")}
                totalCost={this.calculateTotalCostForRow("package_team")}
              />
              <OrderRow
                product="New Branch Package"
                description="A bunch of stuff"
                unitCost={this.state.package_branch.unitCost}
                quantity={this.state.package_branch.quantity}
                increment={this.increment("package_branch")}
                decrement={this.decrement("package_branch")}
                totalCost={this.calculateTotalCostForRow("package_branch")}
              />
              <tr>
                <td />
                <td />
                <td />
                <td className="tr pa3">
                  <div>Quantity: {this.calculateTotalQuantity()}</div>
                </td>
                <td className="tr pa3">
                  <span>Monthly Cost: {this.calculateTotalCost()}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CenteredHeaderWithDescription header="Your contact details so we can get in touch" description="We'll be in touch very soon" />
      </div>
    )
  }
}

export default Order
