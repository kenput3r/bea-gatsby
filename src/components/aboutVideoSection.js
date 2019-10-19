import React from "react"
import YouTubeVideo from "./youtubeVideo"

const AboutVideoSection = () => {
  return(
    <div className="container" style={{paddingTop: "20px"}}>
      <div className="row">
        <div className="col s12">
          <YouTubeVideo url={"https://www.youtube.com/embed/N4_l0aJuq9g?rel=0"} title={"About Beatriz Mendoza"} />
        </div>
      </div>
    </div>
  )
}

export default AboutVideoSection