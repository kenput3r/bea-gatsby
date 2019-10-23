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
      <div className="row multi-video">
        <div className="col s12 l6">
          <YouTubeVideo url={"https://www.youtube.com/embed/EPaM1bx6nkc?rel=0"} title={"Beatriz on Homelessness in Santa Ana"} />
        </div>
        <div className="col s12 l6">
          <YouTubeVideo url={"https://www.youtube.com/embed/KLjEKpxRwpw?rel=0"} title={"Endorsed by Sal Tinajero"} />
        </div>
      </div>
      <div className="row multi-video">
        <div className="col s12 l6">
          <YouTubeVideo url={"https://www.youtube.com/embed/rIvzL2VH43E?rel=0"} title={"Endorsed by Millenials"} />
        </div>
        <div className="col s12 l6">
          <YouTubeVideo url={"https://www.youtube.com/embed/lE24Iit_gqM?rel=0"} title={"Endorsed by Santa Ana Business Owners"} />
        </div>
      </div>
    </div>
  )
}

export default VideoSection