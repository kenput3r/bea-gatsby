import React from "react"
const ParallaxSection = () =>(
  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12" style={{fontWeight: 'bold', color: '#fff'}}>SERVING MY COMMUNITY IS MORE THAN A RESPONSIBILITY, IT'S A PASSION</h5>
        </div>
      </div>
    </div>
    <div className="parallax">
      <img src="/static/santa-ana-old-courthouse.jpg" alt="Old Santa Ana Courthouse" style={{transform: `translate3d(-50%, 275.979px, 0px)`, opacity: `1`}} />
    </div>
  </div>
)

export default ParallaxSection