import React, { Component } from 'react';

class LifeCycleMethodExample extends Component {
  state = { count: 0 };

  // Equivalent to componentDidMount
  componentDidMount() {
    console.log('Component mounted');
    document.title = `Count: ${this.state.count}`;
  }

  // Equivalent to componentDidUpdate
  componentDidUpdate(prevProps, prevState) {

    console.log('Component updated');
    if (prevState.count !== this.state.count) {
      document.title = `Count: ${this.state.count}`;
    }
  }

  // Equivalent to componentWillUnmount
  componentWillUnmount() {
    console.log('Component will unmount');
    document.title = 'React App';
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifeCycleMethodExample;