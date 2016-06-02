//import { combineReducers } from 'redux'
import {ADD_USER, EDIT_USER, DELETE_USER} from './action'

let defaultState = {
    editUser: null,
    users: []
};

let i = 0;

function eventHandle(state = defaultState, action) {
    switch (action.type) {
        case ADD_USER:
            if (state.editUser) {
                var editId = state.editUser.id;
                //编辑保存
                return Object.assign({}, state, {
                    editUser: null,
                    users: state.users.map((user, index) => {
                        if (user.id === editId) {
                            return Object.assign({}, user, {
                                id: editId,
                                name: action.name,
                                age: action.age
                            });
                        }
                        return user
                    })
                });
            } else {
                //添加
                return Object.assign({}, state, {
                    users: [
                        ...state.users,
                        {
                            id: (Math.random()+'').substr(2),
                            name: action.name,
                            age: action.age
                        }
                    ]
                });
            }
        case EDIT_USER:
            //修改
            return Object.assign({}, state, {
                editUser: state.users[action.index]
            });
        case DELETE_USER:
            //删除
            var users = Object.assign([], state.users);
            users.splice(action.index, 1);

            return Object.assign({}, state, {
                users: users
            });
        default:
            return state
    }
}

const userAPP = eventHandle;

export default userAPP