import React, { useContext } from 'react';

import './style.css'

import { CgCheck } from "react-icons/cg";

import { context } from '../../context'

function ReposAll() {

    const ctx = useContext(context)

    return (
        <div className="repositories-all">
            <h1>Repositórios de {(ctx.dataUser.name)?.split(' ')[0]}</h1>
            {
                ctx.dataRepos.map(repo => {
                    return (
                        <div key={repo.id} className="repositorie">
                            <h3>{repo.name}</h3>
                            <p>{repo?.description}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ReposAll;