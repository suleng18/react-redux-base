import React from 'react';
import './DisplayInfor.scss';
import logo from '../logo.svg';

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log('call me constructor');
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log('>>call me componentDidMount');
    setTimeout(() => {
      document.title = 'Sulengdev';
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert('you got 5 user');
      }
    }
  }

  handleShowHide = () => {
    this.setState({ isShowListUser: !this.state.isShowListUser });
  };
  render() {
    console.log('call me render');
    // destructuring
    const { listUsers } = this.props; // props luon la mot object
    // const listUsers = this.props.listUsers;
    // console.log('🚀 ~ DisplayInfor ~', listUsers);
    // props --> properties

    // template + logic js
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
                  <div>
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age}</div>
                  </div>

                  <div>
                    <button onClick={() => this.props.hanldeDeleteUser(user.id)}>Delete</button>
                  </div>

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
