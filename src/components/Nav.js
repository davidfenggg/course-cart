import React from "react";
import { Link } from "react-router-dom";
import smlogo from "./img/smlogo.png";

export default () => (
  <div>
    <Link to="/">
      <div>
        <div>
          <h1
            style={{
              width: "100%",
              padding: "0 1rem",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Penn Course Cart
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "2%",
                padding: "6px",
                height: "auto",
              }}
              src={smlogo}
              alt="sm logo"
            ></img>
          </h1>
        </div>
      </div>
    </Link>
  </div>
);
