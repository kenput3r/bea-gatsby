import React from "react"

const VolunteerSection = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Be A Part Of The Campaign</h1>
          <p>Call For Volunteers</p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Opportunities</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phonebank</td>
                <td>Mon - Fri</td>
                <td>5pm - 8pm</td>
              </tr>
              <tr>
                <td>Canvassing</td>
                <td>Sat & Sun</td>
                <td>10am - 3pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p>1665 E 4th St #209, Santa Ana, CA 92701</p>
          <p>For more information, contact Beatriz at <a href="mailto:info@beamendoza.com">info@beamendoza.com</a>, or use the contact form below.</p>
        </div>
      </div>
    </div>
  )
}

export default VolunteerSection