// class component
// function component

import React, { useState } from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfo from './AddUserInfo';

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: 'Xuan Long', age: '16' },
//       { id: 2, name: 'Su Leng 2', age: '20' },
//       { id: 3, name: 'Sulengdev', age: '30' },
//     ],
//   };

//   hanldeAddNewUser = (userObj) => {
//     // let listUsersNew = this.state.listUsers;
//     // listUsersNew.unshift(userObj);
//     // this.setState({ listUser: listUsersNew });

//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   hanldeDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   // JXS
//   render() {
//     // DRY : don't repeat yourself

//     return (
//       <>
//         <br />
//         <div className="a">
//           <AddUserInfo hanldeAddNewUser={this.hanldeAddNewUser} />
//           <br /> <br />
//           <DisplayInfor listUsers={this.state.listUsers} hanldeDeleteUser={this.hanldeDeleteUser} />
//         </div>

//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: 'Xuan Long', age: '16' },
    { id: 2, name: 'Su Leng 2', age: '20' },
    { id: 3, name: 'Sulengdev', age: '30' },
  ]);

  const hanldeAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
    // this.setState({
    //   listUsers: [userObj, ...this.state.listUsers],
    // });
  };

  const hanldeDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);

    setListUsers(listUsersClone);
    // this.setState({
    //   listUsers: listUsersClone,
    // });
  };

  return (
    <>
      <br />
      <div className="a">
        <AddUserInfo hanldeAddNewUser={hanldeAddNewUser} />
        <br /> <br />
        <DisplayInfor listUsers={listUsers} hanldeDeleteUser={hanldeDeleteUser} />
      </div>

      <div className="b"></div>
    </>
  );
};

export default MyComponent;
