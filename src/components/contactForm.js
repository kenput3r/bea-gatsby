import React, {useEffect} from "react"

const ContactForm = () => {
  useEffect(() => {
    const selects = document.querySelectorAll('select')
    window.M.FormSelect.init(selects)
  })
  return(
    <div className="container" style={{borderTop: "1px solid #ccc"}}>
      <div className="row">
        <div className="col s12">
          <h5>Contact Beatriz</h5>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <form name="volunteer" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="volunteer" />
            <div className="row">
              <div className="col s12 l6 input-field">
                <input id="first_name" name="first_name" type="text" className="validate"></input>
                <label for="first_name">First Name</label>
              </div>
              <div className="col s12 l6 input-field">
                <input id="last_name" name="last_name" type="text" className="validate"></input>
                <label for="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 l6 input-field">
                <input id="email" name="email" type="email" className="validate"></input>
                <label for="email">Email</label>
              </div>
              <div className="col s12 l6 input-field">
                <input id="phone" name="phone" type="tel" className="validate"></input>
                <label for="phone">Phone Number</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <select multiple name="volunteer[]">
                  <option value="" disabled selected>I can...</option>
                  <option value="Work at the phonebank">Volunteer at the phonebank</option>
                  <option value="Join the neighborhood canvassing team">Join the neighborhood canvassing team</option>
                  <option value="Make a donation">Make a donation</option>
                  <option value="I have other ways that I can help">I have other ways that I can help</option>
                </select>
                <label>How can you help?</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 input-field">
                <textarea id="message" name="message" className="materialize-textarea"></textarea>
                <label for="message">Message</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
                <button className="btn background-blue" type="submit">SEND</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm