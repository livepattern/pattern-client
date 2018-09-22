import React, { Component } from "react"
import Slider from "react-rangeslider"
import Form from "./components/form"
import OrderRow from "./components/order_row"
import CenteredHeaderWithDescription from "./components/centered_header_with_description"
import "react-rangeslider/lib/index.css"
import COSTS from "../costs"

class Order extends Component {
  constructor() {
    super()
    this.state = {
      term: 6,
      quantities: {
        chair: 0,
        desk: 0,
        conference_table: 0,
        filing_cabinet: 0,
        lounge_seating: 0,
        coffee_table: 0
      }
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.calculateTotalCostForRow = this.calculateTotalCostForRow.bind(this)
    this.submitOrder = this.submitOrder.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  setProductQuantity(product_name, quantity) {
    this.setState({
      term: this.state.term,
      quantities: {
        ...this.state.quantities,
        [product_name]: quantity
      }
    })
  }

  calculateCalculatedCost(product) {
    console.log("product", product)

    return
  }

  increment = product => () => {
    const new_product_quantity = this.state.quantities[product] + 1

    this.setProductQuantity(product, new_product_quantity)
  }

  decrement = product => () => {
    const new_product_quantity = Math.max(this.state.quantities[product] - 1, 0)

    this.setProductQuantity(product, new_product_quantity)
  }

  calculateTotalCostForRow(product) {
    let totalCost =
      this.state.quantities[product] * COSTS[product][this.state.term]
    return totalCost
  }

  calculateTotalQuantity() {
    let quantity = Object.keys(this.state.quantities).reduce((result, key) => {
      result = this.state.quantities[key] + result
      return result
    }, 0)

    return quantity
  }

  calculateTotalCost() {
    let totalCost = Object.keys(this.state.quantities).reduce((result, key) => {
      result = this.calculateTotalCostForRow(key) + result
      return result
    }, 0)

    return totalCost
  }

  submitOrder() {
    let _body = {
      email: "manan@gmail.com",
      message: "Hello World!",
      order: {
        term: 12,
        cart: [
          {
            product: "Chair",
            quantity: 2,
            price: 60
          },
          {
            product: "Table",
            quantity: 1,
            price: 80
          }
        ]
      }
    }

    fetch("https://api.livepattern.com/api/v1/store", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_body)
    })
      .then(res => res.json().then(res => console.log(res)))
      .catch(error => {
        console.log("error", error)
      })
  }

  handleChange(term) {
    this.setState({ term })
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
                calculatedCost={COSTS.chair[this.state.term]}
                quantity={this.state.quantities.chair}
                increment={this.increment("chair")}
                decrement={this.decrement("chair")}
                totalCost={this.calculateTotalCostForRow("chair")}
              />
              <OrderRow
                product="Desk"
                calculatedCost={COSTS.desk[this.state.term]}
                quantity={this.state.quantities.desk}
                increment={this.increment("desk")}
                decrement={this.decrement("desk")}
                totalCost={this.calculateTotalCostForRow("desk")}
              />
              <OrderRow
                product="Conference Table"
                calculatedCost={COSTS.conference_table[this.state.term]}
                quantity={this.state.quantities.conference_table}
                increment={this.increment("conference_table")}
                decrement={this.decrement("conference_table")}
                totalCost={this.calculateTotalCostForRow("conference_table")}
              />
              <OrderRow
                product="Filing Cabinet"
                calculatedCost={COSTS.filing_cabinet[this.state.term]}
                quantity={this.state.quantities.filing_cabinet}
                increment={this.increment("filing_cabinet")}
                decrement={this.decrement("filing_cabinet")}
                totalCost={this.calculateTotalCostForRow("filing_cabinet")}
              />
              <OrderRow
                product="Lounge Seating"
                calculatedCost={COSTS.lounge_seating[this.state.term]}
                quantity={this.state.quantities.lounge_seating}
                increment={this.increment("lounge_seating")}
                decrement={this.decrement("lounge_seating")}
                totalCost={this.calculateTotalCostForRow("lounge_seating")}
              />
              <OrderRow
                product="Coffee Table"
                calculatedCost={COSTS.coffee_table[this.state.term]}
                quantity={this.state.quantities.coffee_table}
                increment={this.increment("coffee_table")}
                decrement={this.decrement("coffee_table")}
                totalCost={this.calculateTotalCostForRow("coffee_table")}
              />
              <tr />
            </tbody>
          </table>
          <div className="flex justify-between items-center mw7 center">
            <div className="mr4">
              Lease Engagement Term: {this.state.term} months
            </div>
            <div style={{ flexGrow: 2 }} className="mr4">
              <Slider
                min={1}
                max={12}
                value={this.state.term}
                //onChangeStart={this.handleChangeStart}
                onChange={this.handleChange}
                //onChangeComplete={this.handleChangeComplete}
              />
            </div>
            <span className="mr4">
              Quantity: {this.calculateTotalQuantity()}
            </span>
            <span>Monthly: {this.calculateTotalCost()}</span>
          </div>
        </div>

        <CenteredHeaderWithDescription header="Your contact details so we can get in touch" />
        <Form onSubmit={this.submitOrder} />
      </div>
    )
  }
}

export default Order
