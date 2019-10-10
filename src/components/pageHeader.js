import React from "react"
import Logo from "./logo"

const PageHeader = () => {
  return(
    <div className="container">
      <div className="row" style={{marginBottom: "0", marginTop: "20px"}}>
        <div className="col s12 center-align">
          <Logo />
        </div>
      </div>
    </div>
  )
}

export default PageHeader