// class component
// function component

import React from 'react';
class MyComponent extends React.Component {
  state = {
    name: 'SuLeng',
    adrress: 'Ha Noi',
    age: 26,
  };

  // JXS
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.adrress}
      </div>
    );
  }
}

export default MyComponent;
