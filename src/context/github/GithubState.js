import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USER,
    GET_REPOS,
    SET_LOADING
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users
    const searchUsers = async text => {
        setLoading();
    
        const response = await axios.get(
            `https://api.github.com/search/users?q=${text}&client_id=
            ${process.env.REACT_APP_GITHUB_CLIENT_ID}
            &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        dispatch({
            type: SEARCH_USERS,
            // payload - data we want to send
            payload: response.data.items
        });
    };

    //Get Repos

    //Clear Users

    //Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers
        }}
    >
        {props.children}
    </GithubContext.Provider>

}

export default GithubState;