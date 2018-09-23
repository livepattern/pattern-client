import React from "react"
import chair_1 from "../../images/chairs/1.jpg"

const ProductGrid = () => {
  return (
    <div className="product-grid">
      <div className="flex justify-end items-center">
        <div className="product-container">
          <img src={chair_1} />
        </div>
      </div>
      <div className="product-grid-item">
        <div className="product-container">
          <img src={chair_1} />
        </div>
      </div>
      <div className="flex justify-start items-center">
        <div className="product-container">
          <img src={chair_1} />
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="product-container">
          <img src={chair_1} />
        </div>
      </div>
      <div className="product-grid-item">
        <div className="product-container">
          <img src={chair_1} />
        </div>
      </div>
      <div className="flex justify-start items-center">
        <div className="product-container">
          <img src={chair_1} />
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
