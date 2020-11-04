import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import logo from "./img/logo.png";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  openModal = (item) => {
    this.setState({ product: item });
  };

  addToCart = (number) => {
    this.props.addToCart(number);
  };

  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <ul className="courses">
            {this.props.courses.map((item) => (
              <li key={`${item.dept}-${item.number}`}>
                <div
                  className="course"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#f2f2f2",
                    padding: "1rem",
                    marginBottom: "1.5rem",
                    borderRadius: "4px",
                  }}
                >
                  <div>
                    <a href="#" onClick={() => this.openModal(item)}>
                      {item.dept} {item.number}
                    </a>
                    <button
                      onClick={() => this.addToCart(item.number)}
                      className="button add"
                    >
                      +
                    </button>
                    <div>
                      <a
                        href="#"
                        onClick={() => this.openModal(item)}
                        className="course-description"
                      >
                        {item.title}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                x
              </button>
              <div className="class-details">
                <div className="class-details-description">
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: "33%",
                      height: "auto",
                    }}
                    src={logo}
                    alt="Penn Logo"
                  ></img>
                  <h1 style={{ textAlign: "center" }}>
                    {product.dept} {product.number}
                  </h1>
                  <h3 style={{ textAlign: "center" }}>{product.title}</h3>
                  <h4 style={{ textAlign: "center" }}>
                    Prerequsities:
                    {product.prereqs ? (
                      product.prereqs.map((prereq) => <div>{prereq}</div>)
                    ) : (
                      <div>None</div>
                    )}
                  </h4>
                  <h5
                    style={{
                      marginLeft: "30rem",
                      marginRight: "30rem",
                      textAlign: "center",
                    }}
                  >
                    {product.description}
                  </h5>
                  <h4 style={{ textAlign: "center" }}>
                    Cross-Listed As:
                    {product["cross-listed"] ? (
                      product["cross-listed"].map((crosslist) => (
                        <div>{crosslist}</div>
                      ))
                    ) : (
                      <div>None</div>
                    )}
                  </h4>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

export default Courses;

/*
.receipt {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  flex-wrap: wrap;
  width: 50rem;
}

.courses li {
  height: 5rem;
  width: 50rem;
  padding: 1rem;
  margin: 1rem;
}
*/
