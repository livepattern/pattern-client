import React, { Component } from "react"
import ReactModal from "react-modal"
import Slider from "react-rangeslider"
import chair_1 from "../../images/chairs/1.jpg"
import lounge_1 from "../../images/lounge/1.jpg"
import filing_1 from "../../images/filing/1.jpg"
import desk_1 from "../../images/desks/1.jpg"
import conference_1 from "../../images/conference/1.jpg"
import coffee_1 from "../../images/coffee/1.jpg"
import Button from "./Button"
import COSTS from "../../costs"

const From40 = () => <div className="from-40">From $40/month</div>

const GridItem = ({ className, image, showModal }) => {
  return (
    <div className={className}>
      <div className="product-container pointer" onClick={showModal}>
        <img src={image} />
        <div className="ghost" />
        <From40 />
      </div>
    </div>
  )
}

class ProductGrid extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      product: "",
      calculatedCost: "50",
      term: 6,
      image: ""
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  showModal = product => () => {
    switch (product) {
      case "chairs":
        this.setState({
          product: "Chair",
          image: chair_1
        })
        break
      case "coffee_tables":
        this.setState({
          product: "Coffee Table"
        })
        break
      case "lounge":
        this.setState({
          product: "Lounge Seating"
        })
        break
      case "desks":
        this.setState({
          product: "Desk"
        })
        break
      case "conference":
        this.setState({
          product: "Conference Table"
        })
        break
      case "filing":
        this.setState({
          product: "Filing Cabinet"
        })
        break
      default:
        break
    }

    this.setState({ showModal: true })
  }

  hideModal() {
    this.setState({ showModal: false })
  }

  handleChange(term) {
    this.setState({ term })
  }

  getCalculatedCost(product) {
    return COSTS[product][this.state.term]
  }

  render() {
    return (
      <div className="product-grid">
        <GridItem
          className="flex justify-center justify-end-ns items-center"
          image={chair_1}
          showModal={this.showModal("chairs")}
        />
        <GridItem
          className="product-grid-item"
          image={desk_1}
          showModal={this.showModal("desks")}
        />
        <GridItem
          className="flex justify-center justify-start-ns items-center"
          image={lounge_1}
          showModal={this.showModal("lounge")}
        />
        <GridItem
          className="flex justify-center justify-end-ns items-center"
          image={conference_1}
          showModal={this.showModal("conference")}
        />

        <GridItem
          className="product-grid-item"
          image={coffee_1}
          showModal={this.showModal("coffee_tables")}
        />
        <GridItem
          className="flex justify-center justify-start-ns items-center"
          image={filing_1}
          showModal={this.showModal("filing")}
        />

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          shouldCloseOnEsc={true}
          onRequestClose={this.hideModal}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(42,42,42, 0.8)"
            },
            content: {
              border: "0",
              borderRadius: 0,
              bottom: "auto",
              minHeight: "10rem",
              left: "50%",
              padding: "0",
              position: "fixed",
              right: "auto",
              top: "50%",
              transform: "translate(-50%,-50%)",
              minWidth: "20rem",
              width: "90%",
              maxWidth: "50rem"
            }
          }}
        >
          <div>
            <div className="flex justify-around pa4">
              <div className="flex justify-center items-center">
                <div>

                  {this.state.image && <img src={this.state.image} />}</div>
              </div>
              <div>
                <div className="f2 serif b mb3">{this.state.product}</div>
                <div className="mb3">Multiple Colors</div>
                <div className="f3 b mb3">
                  {this.state.product && (
                    <span>${this.getCalculatedCost(this.state.product)} </span>
                  )}
                  <span className="f4 b">CAN / Monthly</span>
                </div>
                <div className="mb4 w4">
                  <Button text="Get a Quote" />
                </div>
                <div className="mb3">Timeless high quality designs.</div>
                <div className="mb3">Contact us for our selection.</div>
              </div>
            </div>
            <div className="light-yellow-bg flex justify-around items-center pa3">
              <span>
                Lease Engagement Term:{" "}
                <span className="b ml2">{this.state.term} months</span>
              </span>
              <div className="slider-container">
                <Slider
                  min={1}
                  max={12}
                  value={Number(this.state.term)}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default ProductGrid
