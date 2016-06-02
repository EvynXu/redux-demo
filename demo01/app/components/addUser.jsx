import React, { Component, PropTypes } from 'react';

export default class AddUser extends Component {
    render() {
        if(this.props.user){
            this.refs.name.value = this.props.user.name;
            this.refs.age.value = this.props.user.age;
        }

        return (
            <div>
                <label>name:</label><input type='text' ref='name'  />
                <label>age:</label><input type='num' ref='age' />
                <button onClick={() => this.handleClick()}>
                    Save
                </button>
            </div>
        );
    }

    handleClick() {
        const nameText = this.refs.name.value.trim();
        const ageText = this.refs.age.value.trim();

        if(nameText == '' || ageText == '' || ageText == 0)return;

        this.props.onAddClick(nameText,ageText);
        this.refs.name.value = '';
        this.refs.age.value = '';
    }
}
