//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import facebook from "../images/icon-facebook.png"
import instagram from "../images/icon-instagram.png"
import twitter from "../images/icon-twitter.png"
import youtube from "../images/icon-youtube.png"
import logo from "../images/logo.jpg"
import beaMendoza from "../images/bea-mendoza.jpg"
//import Image from "../components/image"
//import styled from "styled-components"

const Header = ({ siteTitle }) => {
  return(
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div> */}
      <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper" style={{padding: '0 10px'}}>
          <div className="row valign-wrapper" style={{marginBottom: 0}}>
            <div className="col s12 l5">
              <a href="/" style={{width: '100%'}}>Beatriz Mendoza For Santa Ana City Council, 2019</a>
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
              <a href="mailto:info@beamendoza.com" title="email Beatriz Mendoza">info@beamendoza.com</a>
            </div>

          </div>
        </div>
      </nav>
    </div>
    <div className="parallax-container valign-wrapper">
      <div className="section no-pad-bot">
        <div className="container">
          <div className="row">
            <img className="logo" src={logo} alt="The Beatriz Mendoza for 
            Santa Ana City Council logo" />
          </div>
        </div>
      </div>
      <div className="parallax">
        <img className="header-image" src={beaMendoza} alt="Photograph of Beatriz Mendoza" /> 
        {/*<img src="/static/bea-mendoza.jpg" />*/}
      </div>
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
