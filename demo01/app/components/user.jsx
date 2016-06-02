import React, {Component, PropTypes} from 'react';

export default class User extends Component {
    render() {
        return (
            <tr >
                <td>
                    {this.props.name}
                </td>

                <td>
                    {this.props.age}
                </td>
                <td>
                    <input type="button" value="edit" onClick={() => this.props.editClick(this.props.index)}/>
                    <input type="button" value="delete" onClick={() => this.props.deleteClick(this.props.index)}/>
                </td>
            </tr>
        );
    }
}
