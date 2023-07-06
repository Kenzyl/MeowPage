import React from "react";
import gambar from "./hello.gif";

class About extends React.Component {
  render() {
    return (
      <div className="body">
        <div>
          <h1>My Name is Kenneth L.</h1>
          <h4>I am a College Student in Mikroskil University</h4>
        </div>
        <img src={gambar} />
      </div>
    );
  }
}

export default About;
