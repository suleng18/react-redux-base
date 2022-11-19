import React from 'react';
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };
  render() {
    // destructuring
    const { listUsers } = this.props; // props luon la mot object
    // const listUsers = this.props.listUsers;
    // console.log('🚀 ~ DisplayInfor ~', listUsers);
    // props --> properties
    return (
      <div className="display-info-container">
        <img className="" src={logo} alt="" />
        <div>
          <span onClick={() => this.handleShowHide()}>
            {this.state.isShowListUser === true ? 'Hide list user:' : 'Show list user:'}
          </span>
        </div>

        {this.state.isShowListUser && (
          <>
            {listUsers.map((user, idex) => {
              return (
                <div key={user.id} className={+user.age > 18 ? 'black' : 'red'}>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
