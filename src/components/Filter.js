import React, { Component } from "react";

class Filter extends Component {
  state = {};
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} results</div>
        <div className="filter-level">
          Level{" "}
          <select value={this.props.level} onChange={this.props.filterLevels}>
            <option value="">All</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
