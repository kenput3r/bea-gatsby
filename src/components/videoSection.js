import React from "react"

const VideoSection = ({url}) => {
  return(
    <div className="container" style={{paddingTop: "20px"}}>
      <div className="row">
        <div className="col s12">
          <div className="video-container">
          <iframe width="560" height="315" src={url} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection