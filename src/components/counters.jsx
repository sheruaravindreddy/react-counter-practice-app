import React from "react";
import Counter from "./counterComponent";
import { Component } from "react";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 }
    ]
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.resetAll}>
          Reset
        </button>
        <button className="btn btn-primary m-2" onClick={this.addCounter}>Add Counter</button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            <h4>Counter No. {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    console.log("Delete Event called for id : ", counterId);
  };

  handleIncrement = counterId => {
    const counters = this.state.counters.map(c => {
      if (c.id === counterId) {
        c.value += 1;
      }
      return c;
    });
    this.setState(counters);
    console.log(this.state.counters.filter(c => c.id === counterId)[0]);
  };

  resetAll = () => {
    console.log("reset event called...");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  addCounter = () => {
      const new_counter = this.state.counters;
      new_counter.push({"id":new_counter.length+1,"value":Math.floor(Math.random() * new_counter.length+1)});
      this.setState(new_counter);
  }
}

export default Counters;
