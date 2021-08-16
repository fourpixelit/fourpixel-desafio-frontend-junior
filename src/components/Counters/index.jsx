import React from 'react'
import { useHistory } from 'react-router-dom';
import './style.css'

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

            <div onClick={() => handleClickFollowers('/sequidores')}>
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