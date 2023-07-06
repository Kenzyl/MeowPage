import React from "react";
import gambar from "./hello.gif";

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <div>
          <h1>
            <i>Welcome to Home page</i>
          </h1>
        </div>
        <img src={gambar} />
      </div>
    );
  }
}

export default Home;
