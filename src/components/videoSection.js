import React from "react"
import YouTubeVideo from "./youtubeVideo"

const VideoSection = () => {
  return(
    <div className="container" style={{paddingTop: "20px"}}>
      <div className="row">
        <div className="col s12">
          <YouTubeVideo url={"https://www.youtube.com/embed/zCA8EvxjsFY?rel=0"} title={"Beatriz Mendoza For Santa Ana City Council"} />
        </div>
      </div>
      <div className="row">
        <div className="col s12 l6">
          <YouTubeVideo url={"https://www.youtube.com/embed/KLjEKpxRwpw?rel=0"} title={"Endorsed by Sal Tinajero"} />
        </div>
        <div className="col s12 l6">
          <YouTubeVideo url={"https://www.youtube.com/embed/rIvzL2VH43E?rel=0"} title={"Endorsed by Millenials"} />
        </div>
      </div>
    </div>
  )
}

export default VideoSection