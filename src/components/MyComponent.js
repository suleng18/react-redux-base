// class component
// function component

import React from 'react';
import UserInfor from './UserInfo';
class MyComponent extends React.Component {
  // JXS
  render() {
    return (
      <div className="h1">
        <UserInfor />
      </div>
    );
  }
}

export default MyComponent;
