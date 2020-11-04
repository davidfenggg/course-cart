import React, { Component } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Courses from "./components/Courses";
import Cart from "./components/Cart";
import courses from "./data/courses";
import Filter from "./components/Filter";
import Receipt from "./components/pages/Receipt";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      courseList: courses,
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      level: "",
      sort: "",
    };
  }

  filterLevels = (event) => {
    if (event.target.value == "") {
      this.setState({ level: "", courseList: courses });
    } else {
      this.setState({
        level: event.target.value,
        courseList: courses.filter(
          (course) =>
            Math.floor((course.number / 100) % 10) * 100 == event.target.value
        ),
      });
    }
  };

  addToCart = (number) => {
    const cartItems = this.state.cartItems.slice();
    let inCart = false;
    cartItems.forEach((item) => {
      if (item[0].number === number) {
        inCart = true;
      }
    });
    if (!inCart && this.state.cartItems.length < 7) {
      cartItems.push(courses.filter((course) => course.number === number));
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
  };

  removeFromCart = (item) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((course) => course[0].number !== item.number),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(
        cartItems.filter((course) => course[0].number !== item.number)
      )
    );
  };

  render() {
    return (
      <Router>
        <div className="grid-container">
          <header>
            <Nav />
          </header>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <main>
                  <div className="content">
                    <div className="main">
                      <Filter
                        count={this.state.courseList.length}
                        level={this.state.level}
                        filterLevels={this.filterLevels}
                      ></Filter>
                      <Courses
                        courses={this.state.courseList}
                        addCourse={this.addCourse}
                        addToCart={this.addToCart}
                      ></Courses>
                    </div>
                    <div className="sidebar">
                      <Cart
                        removeFromCart={this.removeFromCart}
                        cartItems={this.state.cartItems}
                      ></Cart>
                    </div>
                  </div>
                </main>
              );
            }}
          />
          <Route
            exact
            path="/receipt"
            render={(cartItems) => (
              <Receipt state={this.state} isAuthed={true} />
            )}
          />
          <footer>Made by David Feng :)</footer>
        </div>
        ;
      </Router>
    );
  }
}

export default App;
