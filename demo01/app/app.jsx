import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addUser, editUser,deleteUser} from './biz/action';
import AddUser from './components/addUser';
import UserList from './components/userList';

class App extends Component {
    render() {
        const {dispatch, visibleUsers ,visibleEditUser} = this.props;
        console.log(`visibleUsers=${visibleUsers.length}`);
        console.log(`visibleEditUser=${JSON.stringify(visibleEditUser)}`);
        return (
            <div>
                <AddUser user={visibleEditUser} onAddClick={(name,age) => dispatch(addUser(name,age)) }/>
                <UserList
                    users={visibleUsers}
                    onEditClick={index => dispatch(editUser(index)) }
                    onDeleteClick={index => dispatch(deleteUser(index)) } />
            </div>
        )
    }
}

function select(state) {
    console.log(`select state=${JSON.stringify(state)}`);
    return {
        visibleUsers: state.users,
        visibleEditUser:state.editUser
    };
}

export default connect(select)(App);