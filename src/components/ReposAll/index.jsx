import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './style.css'

import { context } from '../../context'
import { GoX, GoHeart} from "react-icons/go";
import { CgHeart } from "react-icons/cg";

import RepoInfo from '../RepoInfo';

function ReposAll() {

    const [infoRepo, setInfoRepo] = useState({})

    const ctx = useContext(context)
    const history = useHistory()

    function handleClickRepo(repo) {
        const repoInfo = document.querySelector('.container-repository-info')
        const reposAll = document.querySelector('.repositories-all')

        repoInfo.classList.remove('hidden')
        reposAll.classList.add('hidden')

        setInfoRepo(repo)
    }

    function handleRepositories(route) {
        history.push(route)
    }

    return (
        <>
            <RepoInfo repo={infoRepo} />
            <div className="repositories-all">
                <GoX className="close" onClick={() => handleRepositories('/')} />
                <h1>Repositórios de {(ctx.dataUser.name)?.split(' ')[0]}</h1>
                <div className="container-repository">
                    {
                        ctx.dataRepos.map(repo => {
                            return (
                                <div key={repo.id} className="repository" onClick={() => handleClickRepo(repo)}>
                                    <h3>{repo.name}</h3>
                                    <p>{repo?.description}</p>
                                    <CgHeart className="hearth" onClick={() => console.log('coracao')}/> <GoHeart />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ReposAll;