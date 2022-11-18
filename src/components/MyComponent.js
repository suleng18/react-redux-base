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

  // JXS
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
