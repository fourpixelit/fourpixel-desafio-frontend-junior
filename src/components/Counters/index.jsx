import './style.css'

import React from 'react'
import { useHistory } from 'react-router-dom';

function Counters(props) {

    const history = useHistory()

    function handleClickRepos(route) {
        history.push(route)
    }
    function handleClickFollowers(route) {
        history.push(route)
    }
    function handleClickFollowing(route) {
        history.push(route)
    }

    return (
        <div className="infos">
            <div onClick={() => handleClickRepos('/repositorios')}>
                <p>Repositórios</p>
                <span>{props.repos}</span>
            </div>

            <div onClick={() => handleClickFollowers('/seguidores')}>
                <p>Seguidores</p>
                <span>{props.followers}</span>
            </div>

            <div onClick={() => handleClickFollowing('/seguindo')}>
                <p>Seguindo</p>
                <span>{props.following}</span>
            </div>

        </div>
    );
}

export default Counters;