import React from "react"
import Footer from "./components/Footer"
import CenteredHeaderWithDescription from "./components/centered_header_with_description"
import HowItWorksIconGroup from "./components/how_it_works_icon_group"
import Button from "./components/Button"
import delivery_icon from "../icons/delivery.png"
import price_icon from "../icons/price.png"
import style_icon from "../icons/style.png"
import truck_photo from "../images/truck.png"
import ProductGrid from "./components/product_grid"

const Home = () => {
  return (
    <React.Fragment>
      <div id="hero" className="mt5 white">
        <div className="pv6 ph3 ph6-ns">
          <div className="f2 serif lh-title mb3">Pattern</div>
          <div className="lh-copy measure-narrow mb4">
            Rent Office Furniture Today
          </div>
          <div className="w4 black">
            <Button text="Get a Quote" />
          </div>
        </div>
      </div>

      {/* Free consultation */}
      <a
        target="_blank"
        href="http://calendly.com/pattern-604"
        className="hide-when-modal-open h3 flex items-center justify-center yellow-bg fw5 ph3 sticky"
      >
        <span>
          For expert furniture advice,{" "}
          <span className="underline">schedule a FREE consultation</span> with
          our designers
        </span>
      </a>

      {/* How it Works */}
      <div className="light-yellow-bg pb5">
        <CenteredHeaderWithDescription
          header="How it works"
          id="how-it-works"
          description="Furniture leasing for your office that checks all the boxes"
        />

        <div className="flex flex-column flex-row-ns">
          <HowItWorksIconGroup
            title="Convenience"
            img={delivery_icon}
            description="Choose your furniture, pick your timeline, and we'll do the rest. Pattern Delivery will drop-off, set-up, and pick-up your furniture for free. "
          />
          <HowItWorksIconGroup
            title="Price"
            img={price_icon}
            description="If your need is temporary, Pattern offers a cost effective and hassle-free solution with transparent prices."
          />
          <HowItWorksIconGroup
            title="Flexibility"
            img={style_icon}
            description="Pattern office designers are vetted professionals and real people. From small startup space to larger HQs, we’ve got the designer for you."
          />
        </div>
        <div className="flex justify-center">
          <div className="w4">
            <Button text="Get a Quote" />
          </div>
        </div>
      </div>

      {/* Furnish your space */}
      <CenteredHeaderWithDescription
        header="Furnish your space"
        id="furnish-your-space"
        description="Here's our style"
      />

      <div className="mb5">
        <ProductGrid />
      </div>

      <div className="flex flex-column items-center mb5">
        <div className="mb4 ph3">
          Need something different? We're flexible so send us your floorplan or
          get in touch.
        </div>
        <Button text="Order Now" />
      </div>

      <div className="flex flex-column flex-row-l">
        <div className="w-100 w-50-l light-yellow-bg pa3 pa5-m pa5-l serif f3-ns f5 lh-copy tc flex flex-column items-center justify-center">
          <div className="mb3">
            Pattern is Vancouver’s leading furniture rental company.
          </div>
          <div className="mb3">Get your quote in less than 24 hours.</div>
          <div className="mb3">Enjoy free delivery with a smile.</div>
        </div>
        <div className="w-100 w-50-l truck-photo">
        </div>
      </div>
      {/* About Pattern */}
      <CenteredHeaderWithDescription
        header="About Pattern"
        description={
          <div>
            <div className="mb3">
              Pattern is on a mission to impact how the physical workspace
              affects the employee experience. We offer businesses affordable
              ways to rent beautiful office furniture on their terms.{" "}
            </div>
            <div className="mb3">
              Pattern believes that everyone deserves to work at a beautiful
              office and work station, and that design and set-up should be
              affordable and easy. We’re lucky to have great relationships with
              retailers, a diverse and talented group of professional designers,
              and an operations team that will go the distance for our clients.
            </div>
            <div>
              Pattern is studying the emerging science of how the office space
              impacts how people work. We’d love to hear from you.
            </div>
          </div>
        }
      />

      <Footer />
    </React.Fragment>
  )
}

export default Home
