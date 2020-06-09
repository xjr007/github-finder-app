import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    render() {
        return (
            <div style={userStyle}>
                {this.props.users.map(user => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

const userStyle = {
    dispay: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridgap: '1rem'
}

export default Users
