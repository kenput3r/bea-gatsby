import React from "react"

const YouTubeVideo = ({url, title}) => {
  return(
    <div className="video-container">
      <iframe width="560" height="315" src={url} title={title} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default YouTubeVideo