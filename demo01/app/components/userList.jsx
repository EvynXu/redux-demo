import React, { Component, PropTypes } from 'react';
import User from './user';

export default class UserList extends Component {
    render() {
        return (
            <table>
                <tbody>
                {this.props.users.map((user, index) =>
                    <User {...user}
                        key={index}
                        index={index}
                        editClick={index => this.props.onEditClick(index)}
                        deleteClick={index => this.props.onDeleteClick(index)}/>
                )}
                </tbody>
            </table>
        )
    }
}
