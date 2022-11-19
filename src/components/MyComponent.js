// class component
// function component

import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfo';

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: 'Xuan Long', age: '16' },
      { id: 2, name: 'Su Leng 2', age: '20' },
      { id: 3, name: 'Sulengdev', age: '30' },
    ],
  };
  // JXS
  render() {
    return (
      <div className="h1">
        <UserInfor />
        <br /> <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
