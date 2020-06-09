import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'mojombo',
                avatar_url: '#',
                html_url: '#'
            },
            {
                id: '2',
                login: 'drkeisw',
                avatar_url: '#',
                html_url: '#'
            },
            {
                id: '3',
                login: 'gtkeodalq',
                avatar_url: '#',
                html_url: '#'
            }
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
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
