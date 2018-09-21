import React, { Component } from "react"
import Form from "./components/Form"
import OrderRow from "./components/OrderRow"
import CenteredHeaderWithDescription from "./components/CenteredHeaderWithDescription"

class Order extends Component {
  constructor() {
    super()
    this.state = {
      chair: { quantity: 0, unitCost: 123 },
      desk: { quantity: 0, unitCost: 218 },
      conference_table: { quantity: 0, unitCost: 303 },
      filing_cabinet: { quantity: 0, unitCost: 95 },
      lounge_seating: { quantity: 0, unitCost: 272 },
      coffee_table: { quantity: 0, unitCost: 127 }
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.calculateTotalCostForRow = this.calculateTotalCostForRow.bind(this)
    this.submitOrder = this.submitOrder.bind(this)
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

  submitOrder() {
    console.log("this.state", this.state)
  }

  render() {
    return (
      <div className="mt5">
        <CenteredHeaderWithDescription
          header="Lease furniture for your office space"
          textSize="f2-ns f4 f3-m"
          description="No set-up or hidden fees!"
        />
        <div className="bg-near-white mr5-ns ml5-ns pa3-ns">
          {/* Row */}
          <table className="f5 mw8 center" cellSpacing="0">
            <colgroup>
              <col width="30%" />
              <col width="20%" />
              <col width="30%" />
              <col width="20%" />
            </colgroup>
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
                product="Filing Cabinet"
                unitCost={this.state.filing_cabinet.unitCost}
                quantity={this.state.filing_cabinet.quantity}
                increment={this.increment("filing_cabinet")}
                decrement={this.decrement("filing_cabinet")}
                totalCost={this.calculateTotalCostForRow("filing_cabinet")}
              />
              <OrderRow
                product="Lounge Seating"
                unitCost={this.state.lounge_seating.unitCost}
                quantity={this.state.lounge_seating.quantity}
                increment={this.increment("lounge_seating")}
                decrement={this.decrement("lounge_seating")}
                totalCost={this.calculateTotalCostForRow("lounge_seating")}
              />
              <OrderRow
                product="Coffee Table"
                unitCost={this.state.coffee_table.unitCost}
                quantity={this.state.coffee_table.quantity}
                increment={this.increment("coffee_table")}
                decrement={this.decrement("coffee_table")}
                totalCost={this.calculateTotalCostForRow("coffee_table")}
              />
              <tr>
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

        <CenteredHeaderWithDescription header="Your contact details so we can get in touch" />
        <Form onSubmit={this.submitOrder} />
      </div>
    )
  }
}

export default Order
