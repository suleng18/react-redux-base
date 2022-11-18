import React from 'react';

class UserInfor extends React.Component {
  state = {
    name: 'Su Leng',
    adrress: 'Ha Noi',
    age: 26,
  };

  handleOnChangeInput = (event) => {
    this.setState({ name: event.target.value });
  };

  handleOnChangeAge = (event) => {
    this.setState({ age: event.target.value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="">Your Name: </label>
          <input
            value={this.state.name}
            onChange={(event) => this.handleOnChangeInput(event)}
            type="text"
          />

          <label htmlFor="">Your Age: </label>
          <input
            value={this.state.age}
            onChange={(event) => this.handleOnChangeAge(event)}
            type="text"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
