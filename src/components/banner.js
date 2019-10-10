import React from "react"
import logo from "../images/logo.jpg"
import beaMendoza from "../images/bea-mendoza.jpg"

const Banner = () => {
  return(
    <div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row">
            <img className="logo" src={logo} alt="The Beatriz Mendoza for 
            Santa Ana City Council logo" style={{width: "500px"}} />
          </div>
        </div>
      </div>
      <div className="parallax">
        <img className="header-image" src={beaMendoza} alt="Photograph of Beatriz Mendoza" /> 
        {/*<img src="/static/bea-mendoza.jpg" />*/}
      </div>
    </div>
  )
}

export default Banner