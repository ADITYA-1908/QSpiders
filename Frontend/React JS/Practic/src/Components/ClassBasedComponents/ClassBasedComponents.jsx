import { Component } from "react";

class ClassBasedComponents extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    const value = 10;
    return (
      <>
        <h1>{value}</h1>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

export default ClassBasedComponents;
