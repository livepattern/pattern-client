import React from "react"
import chair_1 from "../../images/chairs/1.jpg"
import lounge_1 from '../../images/lounge/1.jpg'
import filing_1 from '../../images/filing/1.jpg'
import desk_1 from '../../images/desks/1.jpg'
import conference_1 from '../../images/conference/1.jpg'
import coffee_1 from '../../images/coffee/1.jpg'

const From40 = () => <div className="from-40">From $40/month</div>

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <div className="flex justify-center justify-end-ns items-center">
        <div className="product-container">
          <img src={chair_1} />
          <div className="ghost" />
          <From40 />
        </div>
      </div>
      <div className="product-grid-item">
        <div className="product-container">
          <img src={lounge_1} />
          <div className="ghost" />
          <From40 />
        </div>
      </div>
      <div className="flex justify-center justify-start-ns items-center">
        <div className="product-container">
          <img src={desk_1} />
          <div className="ghost" />
          <From40 />
        </div>
      </div>
      <div className="flex justify-center justify-end-ns items-center">
        <div className="product-container">
          <img src={conference_1} />
          <div className="ghost" />
          <From40 />
        </div>
      </div>
      <div className="product-grid-item">
        <div className="product-container">
          <img src={coffee_1} />
          <div className="ghost" />
          <From40 />
        </div>
      </div>
      <div className="flex justify-center justify-start-ns items-center">
        <div className="product-container">
          <img src={filing_1} />
          <div className="ghost" />
          <From40 />
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
