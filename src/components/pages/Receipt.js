import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Receipt extends Component {
  state = {
    cartItems: this.props.state.cartItems,
  };
  render() {
    return (
      <div>
        <h1 style={{ marginTop: "7.5rem", textAlign: "center" }}>Receipt</h1>
        <Fade bottom cascade>
          <ul className="receipt">
            {this.state.cartItems.map((item) => (
              <li key={`${item[0].dept}-${item[0].number}`}>
                <div
                  className="course"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    padding: "1rem",
                    marginBottom: "1rem",
                    borderRadius: "4px",
                  }}
                >
                  {item[0].dept} {item[0].number}
                  <p className="course-description">{item[0].title}</p>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        <Fade bottom cascade>
          <h4 style={{ textAlign: "center" }}>
            Total: {this.state.cartItems.length}.0 Credits
          </h4>
        </Fade>
      </div>
    );
  }
}

export default Receipt;

/* 

*/
