import React from "react"

const VideoSection = () => {
  return(
    <div className="container" style={{paddingTop: "20px"}}>
      <div className="row">
        <div className="col s12">
          <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4pgYBtt9kMU" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection