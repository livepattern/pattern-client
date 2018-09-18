import React from "react"
import CenteredHeaderWithDescription from './components/CenteredHeaderWithDescription'

const HowItWorksIconGroup = ({ title, description }) => {
  return (
    <div className="flex flex-column items-center tc w-100 w-third-ns pa4">
      <div className="serif mb3">{title}</div>
      <div>{description}</div>
    </div>
  )
}

const Home = () => {
  return (
    <React.Fragment>
      <div className="h7 bg-light-gray mt5">
        <div className="pa5">
          <div className="f2 serif lh-title mb3">Pattern</div>
          <div className="lh-copy measure-narrow mb3">
            Why buy your office furniture outright when you can lease to own?
          </div>
          <div className="br-pill yellow-bg w4 tc pa3">Order Now</div>
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-washed-yellow">
        <CenteredHeaderWithDescription
          header="How it works"
          description="Furniture leasing for your office that checks all the boxes"
        />

        <div className="flex flex-column flex-row-ns">
          <HowItWorksIconGroup
            title="Convenience"
            description="Pick your office furniture, Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Nisi, porro itaque. Architecto,
        laboriosam error itaque omnis libero corrupti cumque"
          />
          <HowItWorksIconGroup
            title="Price"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aperiam unde inventore similique dicta cupiditate illum sed sunt
          accusamus autem, eius voluptatibus est fuga rerum vel, molestiae
          ipsum."
          />
          <HowItWorksIconGroup
            title="Flexibility"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          corrupti nam quia"
          />
        </div>
      </div>

      {/* Furnish your space */}
      <CenteredHeaderWithDescription
        header="Furnish your space"
        description="Here's our style"
      />
      <div className="h6 pa5 bg-light-gray mb3" />
      <div className="flex flex-column items-center mb5">
        <div className="mb4">
          Need something different? We're flexible so send us your floorplan or
          get in touch.
        </div>
        <div className="br-pill yellow-bg w4 tc pa3">Order Now</div>
      </div>

      <div className="flex">
        <div className="w-50 bg-washed-yellow pa5 tc serif f3">
          "Willson will come and deliver all our furniture if anyone wants to
          know; he knows how to set up 14 chairs in 2 hours and has white
          gloves."{" "}
        </div>
        <div className="w-50 bg-light-gray" />
      </div>
      {/* About Pattern */}
      <CenteredHeaderWithDescription
        header="About Pattern"
        description="Starting and building a company is hard and life is too short to deal with trips to a Swedish boxed store. Pattern hears you and aims to be your humble servitore, and that all your Lower Mainland office furnishing needs we will support."
      />

      <div className="flex justify-around">
        <div className="flex items-center">
          <span className="logo" /> Pattern
        </div>
        <div className="flex">
          <span className="mr3">Furnish your home</span>
          <span className="mr3">How it Works</span>
          <span className="mr3">About Pattern</span>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
