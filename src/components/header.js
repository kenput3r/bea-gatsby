import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import facebook from "../images/icon-facebook.png"
import instagram from "../images/icon-instagram.png"
import twitter from "../images/icon-twitter.png"
import youtube from "../images/icon-youtube.png"

const Header = ({ siteTitle }) => {
  return(
    <header>
      <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper" style={{padding: '0 10px'}}>
          <div className="row valign-wrapper" style={{marginBottom: 0}}>
            <div className="col s11 l5">
              <a href="/" style={{width: '100%'}}>Beatriz Mendoza For Santa Ana City Council</a>
            </div>

            <div className="col l2 hide-on-med-and-down">
              <div className="row social-icons valign-wrapper" style={{marginBottom: 0}}>
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

            <div className="col l5 hide-on-med-and-down right-align">
              <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/volunteer/">Volunteer</Link></li>
                <li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=beatrizmendozaforcitycouncil%40gmail.com&item_name=Beatriz+Mendoza+for+City+Council+2019&currency_code=USD&source=url" className="btn background-red">Donate</a></li>
              </ul>
            </div>

            <div className="col s1 hide-on-large-only" style={{padding: "0"}}>
              <a href="#" data-target="MobileNav" className="sidenav-trigger" style={{margin: "0"}}><i className="material-icons">menu</i></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
