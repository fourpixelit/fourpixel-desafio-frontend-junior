import React from 'react'
import './style.css'

function Counters(props) {

    return (
        <div className="infos">
            <div>
                <p>Repositórios</p>
                <span>{props.repos}</span>
            </div>

            <div>
                <p>Seguidores</p>
                <span>{props.followers}</span>
            </div>

            <div>
                <p>Seguindo</p>
                <span>{props.following}</span>
            </div>

        </div>
    );
}

export default Counters;