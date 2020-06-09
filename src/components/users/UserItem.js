import React, { Component } from 'react';

export class UserItem extends Component {

    render() {
        //the const below is destructuring
        /*
        This means that I am able to 'pull' the properties
        from the object chosen.
        */
        const {login, avatar_url, html_url} = this.props.user;
        return (
            <div className='card text-center'>
                <img 
                    src={avatar_url} 
                    alt='avatar'
                    className='round-img' 
                    style={{width: '60px' }}
                />
                <h3>{login}</h3>

                <div>
                    <a 
                        href={html_url}
                        className="btn btn-dark btn-sm my-1">
                        More
                    </a>
                </div>

            </div>
        )
    }
}

export default UserItem
