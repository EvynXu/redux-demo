/*
 * action 类型
 */

export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';


/*
 * action 创建函数
 */

export function addUser(name,age) {
    return { type: ADD_USER, name,age }
}

export function editUser(index) {
    return { type: EDIT_USER, index }
}

export function deleteUser(index) {
    return { type: DELETE_USER, index }
}