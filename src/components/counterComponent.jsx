import { Component } from "react";
import React from "react";

class Counter extends Component {

  render() {

    return (
      <div>
          <span className={this.getBadgeOfClass()}>{this.formatCount()}</span>
        {/* <div>{this.renderTags()}</div> */}
          <button
            onClick={() => this.props.onIncrement(this.props.counter.id)}
            className="btn btn-secondary btn-sm"
          >
            Incremement
          </button>
          <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  formatCount() {
    return this.props.counter.value === 0 ? <h1>Zero</h1> : <h1>{this.props.counter.value}</h1>;
  }

  getBadgeOfClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!!</p>;
    else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }

}



export default Counter;
