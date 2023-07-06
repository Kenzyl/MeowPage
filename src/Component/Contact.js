import React from "react";
import gambar from "./contact.gif";

class Contact extends React.Component {
  render() {
    return (
      <div className="body">
        <div>
          <h4>You want my contact information?</h4>
          <hr></hr>
          <h1>No contact information for you. Find it yourself</h1>
        </div>
        <img src={gambar} />
      </div>
    );
  }
}

export default Contact;
