// class component
// function component

import React from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfo from './AddUserInfo';

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: 'Xuan Long', age: '16' },
      { id: 2, name: 'Su Leng 2', age: '20' },
      { id: 3, name: 'Sulengdev', age: '30' },
    ],
  };

  hanldeAddNewUser = (userObj) => {
    // let listUsersNew = this.state.listUsers;
    // listUsersNew.unshift(userObj);
    // this.setState({ listUser: listUsersNew });

    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  // JXS
  render() {
    return (
      <div>
        <AddUserInfo hanldeAddNewUser={this.hanldeAddNewUser} />
        <br /> <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
