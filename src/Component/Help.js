import React from "react";
import gambar from "./help.png";

class Help extends React.Component {
  render() {
    return (
      <div className="body">
        <div>
          <h1>This is Help page.</h1>
          <h4>If you need help, call 911</h4>
        </div>
        <img src={gambar} />
      </div>
    );
  }
}

export default Help;
