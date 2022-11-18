// class component
// function component

import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfo';

class MyComponent extends React.Component {
  // JXS
  render() {
    const myNumber = [2, 3, 4];
    return (
      <div className="h1">
        <UserInfor />
        <br /> <br />
        <DisplayInfor name="Su Leng DEV" age="30" />
        <hr />
        <DisplayInfor name={'SUDEV'} age={21} myNumber={myNumber} />
      </div>
    );
  }
}

export default MyComponent;
