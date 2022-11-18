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
    console.log('My name is ', this.state.name);
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }

  // JXS
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.adrress}
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyComponent;
