import React, { useState } from "react";
import axios from "axios";

export const Contactus = () => {
  const [youremail, setEmail] = useState("");
  const [yourname, setName] = useState("");
  const [yourmessage, setMessage] = useState("");
  const [yoursubject, setSubject] = useState("");
  const [showcontactThank, setShowcontactThank] = useState(false);
  const [showcontact, setShowcontact] = useState(true);

  const sendEmail = async (e) => {
    e.preventDefault();

    setShowcontactThank(!showcontactThank);
    setShowcontact(!showcontact);

    const data = {
      youremail,
      yoursubject,
      yourmessage,
      yourname,
    };

    const response = await axios.post(
      "http://localhost:5000/api/sendEmail",
      data
    );
    console.log(response.data);
  };

  return (
    <div className="contact-form section">
      <div className="container" id="conatct-us">
        <h3 className="contact-h3">LET'S CONNECT</h3>
        <ul className="flex-container-contact space-between">
          <li className="flex-item">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <br />
            <b>Locations</b>
            <br />
            <span>Americas, Europe, Africa, Asia</span>
          </li>
          {/* <li className="flex-item">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <br />
            <b>Phone Number</b>
            <br />
            <span>+1 702-723-7533</span>
          </li> */}
          <li className="flex-item">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <br />
            <b>Email</b>
            <br />
            <span>rhythmvizion@gmail.com</span>
          </li>
          {/* <li className="flex-item">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <br />
            <b>Wholesale Orders</b>
            <br />
            <span>send text with name and number</span>
          </li> */}
        </ul>
        {/* Section2 */}
        <ul className="flex-container-contact space-between">
          <li className="flex-item contact-us">
            {showcontact ? (
              <form id="form-contact" onSubmit={sendEmail}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="yourname"
                    value={yourname}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject">Subject:</label>
                  <br />
                  <input
                    className="form-input"
                    type="text"
                    id="subject"
                    name="yoursubject"
                    value={yoursubject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="youremail"
                    value={youremail}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <br />
                  <textarea
                    className="form-input"
                    id="message"
                    name="yourmessage"
                    value={yourmessage}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Send Mail</button>
              </form>
            ) : null}
            {showcontactThank ? (
              <div id="thankyou form-contact">
                <h3>Thankyou For Conatacting us</h3>
                <p>
                  We appreciate you contacting us. One of our colleagues will
                  get back in touch with you soon!Have a great day!
                </p>
              </div>
            ) : null}
          </li>
          <li className="flex-item">
            <iframe
              width="100%"
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Rm.%2013B%20Xusheng%20Bldg.,%20Tongcheng%20Road,%20Baoan%20Ave.,%20Baoan%20District,%20Shenzhen,%20Guangdong,%20China%20(518102)%20,%20Shenzhen,%20Guangdong%20China+(Rm.%2013B%20Xusheng%20Bldg.,%20Tongcheng%20Road,%20Baoan%20Ave.,%20Baoan%20District,%20Shenzhen,%20Guangdong,%20China%20(518102)%20,%20Shenzhen,%20Guangdong,%20518102,%20China)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            {/* <a href='https://maps-generator.com/'>Maps Generator</a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
