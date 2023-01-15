import React, { useState } from "react";
import './Contact.css'

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // SERVER LINK FOR EMAIL SERVICES GOES HERE
  };

  return (
    <div className="connect-con">
      <h1>You can connect with me here!</h1>
      <p>
        If you have any additional questions, or just want to reach out to me,
        please feel free to contact me here:
      </p>
      <div className="connect-box">
        <div className="connect-l">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+61 123 456 789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="JohnSmith@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input
                  type="text"
                  placeholder="Hello World!"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>

            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="connect-r">
          <h3>Contact Details</h3>
          <table>
            <tr>
              <td>Email:</td>
              <td>MyEmail@gmail.com</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>+61 987 654 321</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
                U2 22 Fake Street, Gold Coast, QLD, 4227
                </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
