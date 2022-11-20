import React, { useState } from 'react';
import './DisplayInfor.scss';
import logo from '../logo.svg';

// class DisplayInfor extends React.Component {
//   render() {
//     console.log('call me render');
//     // destructuring
//     const { listUsers } = this.props; // props luon la mot object
//     // const listUsers = this.props.listUsers;
//     // console.log('🚀 ~ DisplayInfor ~', listUsers);
//     // props --> properties

//     // template + logic js
//     return (
//       <div className="display-info-container">
//         <img className="" src={logo} alt="" />
//         {/* <div>
//           <span onClick={() => this.handleShowHide()}>
//             {this.state.isShowListUser === true ? 'Hide list user:' : 'Show list user:'}
//           </span>
//         </div> */}

//         {true && (
//           <>
//             {listUsers.map((user, idex) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? 'black' : 'red'}>
//                   <div>
//                     <div>My name's {user.name}</div>
//                     <div>My age's {user.age}</div>
//                   </div>

//                   <div>
//                     <button onClick={() => this.props.hanldeDeleteUser(user.id)}>Delete</button>
//                   </div>

//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props; // props luon la mot object

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  return (
    <div className="display-info-container">
      <img className="" src={logo} alt="" />
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? 'Hide List User' : 'Show List User '}
        </span>
      </div>
      {isShowHideListUser && (
        <>
          {listUsers.map((user, idex) => {
            return (
              <div key={user.id} className={+user.age > 18 ? 'black' : 'red'}>
                <div>
                  <div>My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                </div>

                <div>
                  <button onClick={() => props.hanldeDeleteUser(user.id)}>Delete</button>
                </div>

                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
