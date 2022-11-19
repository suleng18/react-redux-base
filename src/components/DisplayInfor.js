import React from 'react';
import './DisplayInfor.scss';

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
        <div>
          <span onClick={() => this.handleShowHide()}>
            {this.state.isShowListUser === true ? 'Hide list user:' : 'Show list user:'}
          </span>
        </div>

        {this.state.isShowListUser && (
          <div>
            {listUsers.map((user, idex) => {
              return (
                <div key={user.id} className={+user.age > 18 ? 'black' : 'red'}>
                  <div style={{ paddingTop: '50px' }}>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
