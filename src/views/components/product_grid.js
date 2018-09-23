import React, { Component } from "react"
import ReactModal from "react-modal"
import Slider from "react-rangeslider"
import chair_1 from "../../images/chairs/1.jpg"
import chair_2 from "../../images/chairs/2.jpg"
import chair_3 from "../../images/chairs/3.jpg"
import chair_4 from "../../images/chairs/4.jpg"
import chair_5 from "../../images/chairs/5.jpg"
import chair_6 from "../../images/chairs/6.jpg"
import lounge_1 from "../../images/lounge/1.jpg"
import lounge_2 from "../../images/lounge/2.jpg"
import lounge_3 from "../../images/lounge/3.jpg"
import lounge_4 from "../../images/lounge/4.jpg"
import filing_1 from "../../images/filing/1.jpg"
import filing_2 from "../../images/filing/2.jpg"
import filing_3 from "../../images/filing/3.jpg"
import desk_1 from "../../images/desks/1.jpg"
import desk_2 from "../../images/desks/2.jpg"
import desk_3 from "../../images/desks/3.jpg"
import desk_4 from "../../images/desks/4.jpg"
import desk_5 from "../../images/desks/5.jpg"
import conference_1 from "../../images/conference/1.jpg"
import conference_2 from "../../images/conference/2.jpg"
import conference_3 from "../../images/conference/3.jpg"
import conference_4 from "../../images/conference/4.jpg"
import coffee_1 from "../../images/coffee/1.jpg"
import coffee_2 from "../../images/coffee/2.jpg"
import coffee_3 from "../../images/coffee/3.jpg"
import coffee_4 from "../../images/coffee/4.jpg"
import Button from "./Button"
import COSTS from "../../costs"
import ArrowLeft from "../../images/arrow-left.png"
import ArrowRight from "../../images/arrow-right.png"

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
ReactModal.setAppElement("#modal")

class ProductGrid extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      product: "",
      term: 6,
      currentIndex: 0,
      images: []
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.previousImage = this.previousImage.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  showModal = product => () => {
    //reset index
    this.setState({ currentIndex: 0 })

    switch (product) {
      case "chairs":
        this.setState({
          product: "Chair",
          images: [chair_1, chair_2, chair_3, chair_4, chair_5, chair_6]
        })
        break
      case "coffee_tables":
        this.setState({
          product: "Coffee Table",
          images: [coffee_1, coffee_2, coffee_3, coffee_4]
        })
        break
      case "lounge":
        this.setState({
          product: "Lounge Seating",
          images: [lounge_1, lounge_2, lounge_3, lounge_4]
        })
        break
      case "desks":
        this.setState({
          product: "Desk",
          images: [desk_1, desk_2, desk_3, desk_4, desk_5]
        })
        break
      case "conference":
        this.setState({
          product: "Conference Table",
          images: [conference_1, conference_2, conference_3, conference_4]
        })
        break
      case "filing":
        this.setState({
          product: "Filing Cabinet",
          images: [filing_1, filing_2, filing_3]
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

  nextImage() {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0
      })
    }

    this.setState({ currentIndex: this.state.currentIndex + 1 })
  }

  previousImage() {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1
      })
    }
    this.setState({ currentIndex: this.state.currentIndex - 1 })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    console.log("this.state.current index", this.state.currentIndex)
    const options = []
    for (var i = 1; i <= 12; i++) {
      options.push({
        value: i,
        label: `${i} months`
      })
    }
    return (
      <div className="product-grid">
        <GridItem
          className="flex justify-center justify-end-l items-center"
          image={chair_1}
          showModal={this.showModal("chairs")}
        />
        <GridItem
          className="product-grid-item"
          image={desk_1}
          showModal={this.showModal("desks")}
        />
        <GridItem
          className="flex justify-center justify-start-l items-center"
          image={lounge_1}
          showModal={this.showModal("lounge")}
        />
        <GridItem
          className="flex justify-center justify-end-l items-center"
          image={conference_1}
          showModal={this.showModal("conference")}
        />

        <GridItem
          className="product-grid-item"
          image={coffee_1}
          showModal={this.showModal("coffee_tables")}
        />
        <GridItem
          className="flex justify-center justify-start-l items-center"
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
              backgroundColor: "rgba(42,42,42, 0.8)",
              overflow: "hidden"
            },
            content: {
              overflowY: "auto",
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
              maxWidth: "50rem",
              zIndex: "1000"
            }
          }}
        >
          <div>
            <div className="flex justify-end">
              <div
                className="w4 h2 tr pt4 pr4 pb2 pointer dn-ns"
                onClick={this.hideModal}
              >
                Close
              </div>
            </div>
            <div className="flex flex-column flex-row-ns justify-around pa4-ns">
              {/* Images */}
              <div className="flex justify-center items-center">
                <div className="flex items-center justify-between w-100">
                  <div
                    className="flex h4 items-center justify-center w3"
                    onClick={this.previousImage}
                  >
                    <img src={ArrowLeft} className="h3-ns h2 mr3" />
                  </div>
                  <div className="w5-ns w4 flex justify-center">
                    {this.state.images && (
                      <img
                        src={this.state.images[this.state.currentIndex]}
                        style={{ objectFit: "scale-down" }}
                      />
                    )}
                  </div>
                  <div
                    className="flex h4 items-center justify-center w3"
                    onClick={this.nextImage}
                  >
                    <img src={ArrowRight} className="h3-ns h2 ml3" />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-column items-center items-start-ns">
                <div className="f2 serif b mb3">{this.state.product}</div>
                <div className="mb3">Multiple Colors</div>
                <div className="f3 b mb3">
                  {this.state.product && (
                    <span>${this.getCalculatedCost(this.state.product)} </span>
                  )}
                  <span className="f4 b">CAD / Monthly</span>
                </div>
                <div className="mb4 w4">
                  <Button text="Get a Quote" />
                </div>
                <div className="mb3">Timeless high quality designs.</div>
                <div className="mb3">Contact us for our selection.</div>
              </div>
            </div>
            <div className="light-yellow-bg flex justify-around items-center pa3">
              <span className="dn db-ns">
                Lease Engagement Term:{" "}
                <span className="b ml2">{this.state.term} months</span>
              </span>
              <div className="slider-container dn db-ns">
                <Slider
                  min={1}
                  max={12}
                  value={Number(this.state.term)}
                  onChange={this.handleChange}
                />
              </div>
              <div className="dn-ns">
              Lease Engagement Term:{" "}
                <select
                  value={this.state.term}
                  onChange={this.onChange}
                  name="term"
                >
                  {options.map(month => {
                    return (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
        </ReactModal>
      </div>
    )
  }
}

export default ProductGrid
