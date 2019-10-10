import React, {useEffect} from "react"
import { Link } from 'gatsby'
import facebook from "../images/icon-facebook.png"
import instagram from "../images/icon-instagram.png"
import twitter from "../images/icon-twitter.png"
import youtube from "../images/icon-youtube.png"

const SideNav = () => {
  // useEffect(() => {
  //   const el = document.querySelector('#MobileNav')
  //   const side_nav = window.M.Sidenav.getInstance(el)
  //   const button = document.querySelector('.close-button');
  //   button.addEventListener('click', () => {
  //     side_nav.close();
  //   })
  // })
  return(
    <div id="MobileNav" className="sidenav">
      <ul>
        {/* <li><button className="btn-flat close-button"><i className="material-icons">close</i></button></li> */}
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about/">About</Link></li>*/}
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div className="row sidenav-social-icons valign-wrapper" style={{marginBottom: 0}}>
        <div className="col s3 valign-wrapper">
          <a className="valign-wrapper" href="https://www.facebook.com/BeatrizMendozaSantaAna/" title="Beatriz Mendoza on Facebook">
            <img src={facebook} alt="facebook icon" />
          </a>
        </div>
        <div className="col s3 valign-wrapper">
          <a href="https://www.instagram.com/beatrizmendozaforsantaana/" className="valign-wrapper" title="Beatriz Mendoza on Instagram">
            <img src={instagram} alt="instagram icon" />
          </a>
        </div>
        <div className="col s3 valign-wrapper">
          <a href="https://twitter.com/mendoza4sa" className="valign-wrapper" title="Beatriz Mendoza on Twitter">
            <img src={twitter} alt="twitter icon" />
          </a>
          
        </div>
        <div className="col s3 valign-wrapper">
          <a href="https://www.youtube.com/channel/UCIROidHdQWgyQVl5jRlZGiw?disable_polymer=true" className="valign-wrapper" title="Beatriz Mendoza on Youtube">
            <img src={youtube} alt="youtube icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideNav