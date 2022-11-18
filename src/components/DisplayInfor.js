import React from 'react';

class DisplayInfor extends React.Component {
  render() {
    // destructuring
    const { age, name, myNumber } = this.props;
    console.log(myNumber);
    // props --> properties
    return (
      <div>
        <div>My name's {name}</div>
        <div>My name's {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
