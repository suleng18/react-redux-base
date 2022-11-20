import React, { useState } from 'react';

// class AddUserInfo extends React.Component {
//   state = {
//     name: '',
//     adrress: '',
//     age: '',
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({ age: event.target.value });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.hanldeAddNewUser({
//       id: ` ${Math.floor(Math.random() * 100 + 1)}-random`,
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <p>
//           My name is {this.state.name} and I'm {this.state.age}
//         </p>
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label htmlFor="">Your Name: </label>
//           <input
//             value={this.state.name}
//             onChange={(event) => this.handleOnChangeInput(event)}
//             type="text"
//           />

//           <label htmlFor="">Your Age: </label>
//           <input
//             value={this.state.age}
//             onChange={(event) => this.handleOnChangeAge(event)}
//             type="text"
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  // state = {
  //   name: '',
  //   adrress: '',
  //   age: '',
  // };

  const [name, setName] = useState('');
  const [adrress, setAdrress] = useState('HNC Vietnam');
  const [age, setAge] = useState('');

  const handleOnChangeInput = (event) => {
    // this.setState({ name: event.target.value });
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    // this.setState({ age: event.target.value });
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.hanldeAddNewUser({
      id: ` ${Math.floor(Math.random() * 100 + 1)}-random`,
      name: name,
      age: age,
    });
  };

  return (
    <div>
      <p>
        My name is {name} and I'm {age}
      </p>
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label htmlFor="">Your Name: </label>
        <input value={name} onChange={(event) => handleOnChangeInput(event)} type="text" />

        <label htmlFor="">Your Age: </label>
        <input value={age} onChange={(event) => handleOnChangeAge(event)} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfo;
