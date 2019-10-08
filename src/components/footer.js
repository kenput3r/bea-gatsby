import React from "react"

const Footer = () =>(
  <footer className="page-footer">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">WHY BEATRIZ MENDOZA</h5>
        <p className="grey-text text-lighten-4">I will restore trust and bring together stakeholders who are the foundation of our city, and will further the mission of the city to provide quality services to enhance the safety, livability and prosperity of our community. I have two small children and I care deeply for their future in Santa Ana.</p>
      </div>
      <div className="col l4 offset-l2 s12">
        <h5 className="white-text">GET INVOLVED</h5>
        <p>Join the winning team! Help me spread the word in Santa Ana that I am the best candidate to represent our residents. Email Thomas at thomaso.grimes@gmail.com or you can call me directly at (714) 866-8788.</p>
      </div>
    </div>
    <div className="row">
      <div className="col s12 center-align">
        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=beatrizmendozaforcitycouncil%40gmail.com&item_name=Beatriz+Mendoza+for+City+Council+2019&currency_code=USD&source=url" className="btn" style={{backgroundColor: '#1e6fbe'}}>DONATE</a>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      Paid for by © {new Date().getFullYear()} Beatriz Mendoza for City Council 2019 FPPC #1420012
    </div>
  </div>
</footer>
)

export default Footer