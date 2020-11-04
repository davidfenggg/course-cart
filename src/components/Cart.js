import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

class Cart extends Component {
  state = {};

  render() {
    const cartItems = this.props.cartItems;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart
          </div>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="courses">
                {cartItems.map((item) => (
                  <li key={`${item[0].dept}-${item[0].number}`}>
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        padding: "1rem",
                        marginBottom: "1.5rem",
                        borderRadius: "4px",
                        backgroundColor: "#cdeefd",
                      }}
                    >
                      {item[0].dept} {item[0].number}
                      <div className="right">
                        <button
                          className="btn remove"
                          onClick={() => this.props.removeFromCart(item[0])}
                        >
                          x
                        </button>
                      </div>
                      <p className="course-cart-description">{item[0].title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
        </div>
        {cartItems.length !== 0 && (
          <div className="cart">
            <div className="total">
              <div className="total">Total: {cartItems.length}.0 CUs</div>
              <Link
                to={{
                  pathname: "/receipt",
                }}
                className="button-proceed"
              >
                Proceed
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;

/*  */
