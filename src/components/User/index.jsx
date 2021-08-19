import React from 'react';
import './style.css'

function User(props) {

    return (
        <div className='user'>
            <img src={props.avatar} alt={props.login} />
            <h1>{props.name}</h1>
            <h3>{props.login ? '@' + props.login : ''}</h3>
            <p>{props.bio}</p>
        </div>
    );
}

export default User;