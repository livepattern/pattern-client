import React, { Component } from "react"
import Slider from "react-rangeslider"
import Button from "./components/Button"
import OrderRow from "./components/order_row"
import OrderRowMobile from "./components/order_row_mobile"
import CenteredHeaderWithDescription from "./components/centered_header_with_description"
import "react-rangeslider/lib/index.css"
import { Redirect } from "react-router"
import COSTS from "../costs"
import { PHONE_NUMBER } from "../vars"

class Order extends Component {
  constructor() {
    super()
    this.state = {
      term: 6,
      quantities: {
        Chair: 0,
        Desk: 0,
        "Conference Table": 0,
        "Filing Cabinet": 0,
        "Lounge Seating": 0,
        "Coffee Table": 0
      },
      email: "",
      message: "",
      emailValid: true,
      hasAttemptedSubmit: false,
      fireRedirect: false,
      submitError: false
    }
    this.submitOrder = this.submitOrder.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onChange = this.onChange.bind(this)
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

  validateEmail() {
    let isEmailValid = this.state.email.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    )

    if (!isEmailValid) {
      this.setState({ emailValid: false })
      return false
    } else {
      this.setState({ emailValid: true })
      return true
    }
  }

  submitOrder() {
    this.setState({ hasAttemptedSubmit: true })

    let emailIsValid = this.validateEmail()
    if (!emailIsValid) {
      return
    }

    let selectedItems = Object.entries(this.state.quantities).filter(
      product => {
        let quantity = product[1]
        return quantity > 0
      }
    )

    let cart = selectedItems.map(item => {
      return {
        product: item[0],
        quantity: item[1],
        price: this.getCalculatedCost(item[0])
      }
    })

    if (cart.length < 1) {
      // deal with empty cart
      console.log("cart is empty")
      this.setState({ cartIsEmpty: true })
      return
    }

    let _body = {
      email: this.state.email,
      message: this.state.message,
      order: {
        term: this.state.term,
        cart
      }
    }

    fetch("https://api.livepattern.com/api/v1/store", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_body)
    })
      .then(res => res.json().then(() => this.setState({ fireRedirect: true })))
      .catch(error => {
        this.setState({ submitError: true })
      })
  }

  onChange(e) {
    if (e.target.name === "email" && this.state.hasAttemptedSubmit) {
      this.validateEmail()
    }

    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange(term) {
    this.setState({ term })
  }

  getCalculatedCost(product) {
    return COSTS[product][this.state.term]
  }

  render() {
    // const show_cart_empty_prompt =
    //   this.calculateTotalQuantity() < 1 && this.state.hasAttemptedSubmit
    const options = []
    for (var i = 1; i <= 12; i++) {
      options.push({
        value: i,
        label: `${i} months`
      })
    }

    return (
      <div className="mt5">
        <CenteredHeaderWithDescription
          header="Lease furniture for your office space"
          textSize="f2-ns f4 f3-m"
          description="No set-up or hidden fees!"
        />

        {/* MOBILE */}
        <div className="bg-near-white mh3 mr5-ns ml5-ns pa3-ns">
          <div className="dn-ns">
            <div className="flex justify-around b items-center pv3">
              Lease Engagement Term:
              <select
                value={this.state.term}
                onChange={this.onChange}
                name="term"
              >
                {options.map(month => {
                  return <option key={month.value} value={month.value}>{month.label}</option>
                })}
              </select>
            </div>
            <table className="dt w-100 ph3">
              <tbody>
                <OrderRowMobile
                  product="Chair"
                  calculatedCost={this.getCalculatedCost("Chair")}
                  quantity={this.state.quantities["Chair"]}
                  increment={this.increment("Chair")}
                  decrement={this.decrement("Chair")}
                />
                <OrderRowMobile
                  product="Desk"
                  calculatedCost={this.getCalculatedCost("Desk")}
                  quantity={this.state.quantities.Desk}
                  increment={this.increment("Desk")}
                  decrement={this.decrement("Desk")}
                />
                <OrderRowMobile
                  product="Conference Table"
                  calculatedCost={this.getCalculatedCost("Conference Table")}
                  quantity={this.state.quantities["Conference Table"]}
                  increment={this.increment("Conference Table")}
                  decrement={this.decrement("Conference Table")}
                />
                <OrderRowMobile
                  product="Filing Cabinet"
                  calculatedCost={this.getCalculatedCost("Filing Cabinet")}
                  quantity={this.state.quantities["Filing Cabinet"]}
                  increment={this.increment("Filing Cabinet")}
                  decrement={this.decrement("Filing Cabinet")}
                />
                <OrderRowMobile
                  product="Lounge Seating"
                  calculatedCost={this.getCalculatedCost("Lounge Seating")}
                  quantity={this.state.quantities["Lounge Seating"]}
                  increment={this.increment("Lounge Seating")}
                  decrement={this.decrement("Lounge Seating")}
                />
                <OrderRowMobile
                  product="Coffee Table"
                  calculatedCost={this.getCalculatedCost("Coffee Table")}
                  quantity={this.state.quantities["Coffee Table"]}
                  increment={this.increment("Coffee Table")}
                  decrement={this.decrement("Coffee Table")}
                />
              </tbody>
            </table>
          </div>

          {/* DESKTOP */}
          <table className="f5 mw8 center dn dt-ns" cellSpacing="0">
            {/* <colgroup>
              <col width="30%" />
              <col width="20%" />
              <col width="30%" />
              <col width="20%" />
            </colgroup> */}
            <tbody className="lh-copy">
              <OrderRow
                product="Chair"
                calculatedCost={this.getCalculatedCost("Chair")}
                quantity={this.state.quantities["Chair"]}
                increment={this.increment("Chair")}
                decrement={this.decrement("Chair")}
                totalCost={this.calculateTotalCostForRow("Chair")}
              />
              <OrderRow
                product="Desk"
                calculatedCost={this.getCalculatedCost("Desk")}
                quantity={this.state.quantities.Desk}
                increment={this.increment("Desk")}
                decrement={this.decrement("Desk")}
                totalCost={this.calculateTotalCostForRow("Desk")}
              />
              <OrderRow
                product="Conference Table"
                calculatedCost={this.getCalculatedCost("Conference Table")}
                quantity={this.state.quantities["Conference Table"]}
                increment={this.increment("Conference Table")}
                decrement={this.decrement("Conference Table")}
                totalCost={this.calculateTotalCostForRow("Conference Table")}
              />
              <OrderRow
                product="Filing Cabinet"
                calculatedCost={this.getCalculatedCost("Filing Cabinet")}
                quantity={this.state.quantities["Filing Cabinet"]}
                increment={this.increment("Filing Cabinet")}
                decrement={this.decrement("Filing Cabinet")}
                totalCost={this.calculateTotalCostForRow("Filing Cabinet")}
              />
              <OrderRow
                product="Lounge Seating"
                calculatedCost={this.getCalculatedCost("Lounge Seating")}
                quantity={this.state.quantities["Lounge Seating"]}
                increment={this.increment("Lounge Seating")}
                decrement={this.decrement("Lounge Seating")}
                totalCost={this.calculateTotalCostForRow("Lounge Seating")}
              />
              <OrderRow
                product="Coffee Table"
                calculatedCost={this.getCalculatedCost("Coffee Table")}
                quantity={this.state.quantities["Coffee Table"]}
                increment={this.increment("Coffee Table")}
                decrement={this.decrement("Coffee Table")}
                totalCost={this.calculateTotalCostForRow("Coffee Table")}
              />
              <tr />
            </tbody>
          </table>
          <div className="dn-ns mh3 mt3 pb3">
            <div className="flex justify-around">
              <span className="b">
                Quantity: {this.calculateTotalQuantity()}
              </span>
              <span>
                <span className="b">
                  Monthly: ${this.calculateTotalCost()}
                  .00{" "}
                </span>
                <span className="f7">CAD</span>
              </span>
            </div>
          </div>
          <div className="dn db-ns">
            <div className="flex justify-between items-center mw7 center">
              <div className="mr4">
                Lease Engagement Term: {this.state.term} months
              </div>
              <div style={{ flexGrow: 2 }} className="mr4">
                <Slider
                  min={1}
                  max={12}
                  value={Number(this.state.term)}
                  onChange={this.handleChange}
                />
              </div>
              <span className="mr4">
                Quantity: {this.calculateTotalQuantity()}
              </span>
              <span>Monthly: {this.calculateTotalCost()}</span>
            </div>
          </div>
        </div>

        <CenteredHeaderWithDescription header="Your contact details so we can get in touch" />

        <div className="flex justify-center">
          <form className="flex flex-column items-center mb5 bg-white w-90 w-60-m w-60-l ph3">
            <label className="w-100 ph3">
              <input
                type="email"
                name="email"
                className={this.state.emailValid ? "" : "invalid"}
                onChange={this.onChange}
                placeholder="Email Address (required)"
                value={this.state.email}
              />
            </label>
            <label className="w-100 pa3">
              <textarea
                name="message"
                onChange={this.onChange}
                placeholder="Message (optional)"
                value={this.state.message}
              />
            </label>

            {/* {show_cart_empty_prompt && (
              <div className="red tc mb3 mt3">Please add at least one item to your cart.</div>
            )} */}

            {this.state.submitError && (
              <div className="red tc mb3 mt3">
                There was a problem sending your message. Please call{" "}
                {PHONE_NUMBER} to complete the order.
              </div>
            )}

            {!this.state.emailValid && (
              <div className="red tc mb4 mt3">
                Please fill in your email address.
              </div>
            )}

            <Button
              text="Contact us with your order"
              onClick={this.submitOrder}
            />
          </form>
        </div>

        {this.state.fireRedirect && <Redirect to={"/thank-you"} />}
      </div>
    )
  }
}

export default Order
