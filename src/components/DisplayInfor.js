import React from 'react';

class DisplayInfor extends React.Component {
  render() {
    // destructuring
    const { listUsers } = this.props; // props luon la mot object
    // const listUsers = this.props.listUsers;
    // console.log('🚀 ~ DisplayInfor ~', listUsers);
    // props --> properties
    return (
      <div>
        {listUsers.map((user, idex) => {
          return (
            <div key={user.id}>
              <div>My name's {user.name}</div>
              <div>My name's {user.age}</div>
              <hr />
            </div>
          );
        })}
        {/* <div>My name's {name}</div>
        <div>My name's {age}</div>
        <hr />
        <div>My name's {name}</div>
        <div>My name's {age}</div>
        <hr />
        <div>My name's {name}</div>
        <div>My name's {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfor;
