import { Component } from 'react';

class ClassBased extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            ename: "Jerry",
            age: 8
        };
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>---
                <button onClick={this.handleDecrement}>Decrement</button>
                <h1>{this.state.ename}</h1>
                <h1>{this.state.age}</h1>
            </div>
        );
    }
}

export default ClassBased;