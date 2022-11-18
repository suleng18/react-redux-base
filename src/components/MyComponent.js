// class component
// function component

import React from 'react';
class MyComponent extends React.Component {
  state = {
    name: 'SuLeng',
    adrress: 'Ha Noi',
    age: 26,
  };

  handleClick(event) {
    console.log('click me on my button');

    // merge State
    this.setState({
      name: 'XuanLong',
      age: Math.floor(Math.random() * 100 + 1),
    });
  }

  handleOnMouseOver(event) {
    // console.log(event.pageX);
  }

  handleOnChangeInput = (event) => {
    this.setState({ name: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  // JXS
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input onChange={(event) => this.handleOnChangeInput(event)} type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
