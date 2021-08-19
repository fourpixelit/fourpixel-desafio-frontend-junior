import './style.css'

import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { context } from '../../context'

import { GoX } from "react-icons/go";
import { CgHeart } from "react-icons/cg";

import RepoInfo from '../RepoInfo';

function ReposAll() {

    const [likedRepos, setLikedRepos] = useState([])
    const [infoRepo, setInfoRepo] = useState({})

    const ctx = useContext(context)
    const history = useHistory()

    useEffect(() => {
        function loadLocalStorage() {
            const likedReposUserSaved = localStorage.getItem(ctx.dataUser.login)

            if (likedReposUserSaved) {
                setLikedRepos(JSON.parse(likedReposUserSaved))
            }
        }

        loadLocalStorage()
    }, [ctx.dataUser.login])

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

    function handleLikedRepo(e, repo) {
        if (e.target.tagName === 'svg') {
            const target = e.target
            target.classList.toggle('liked')
            handleLikedRepos(repo)
        }
    }

    function handleLikedRepos(repo) {
        const likedReposUserSaved = localStorage.getItem(ctx.dataUser.login)

        if (likedReposUserSaved) {
            const reposLikedInLocalStorage = JSON.parse(likedReposUserSaved)

            const toggledLike = verifyToggleLike(reposLikedInLocalStorage, repo)
            saveLikedRepos(toggledLike)
            return
        }
        saveLikedRepos([repo.id])
    }

    function verifyToggleLike(repositories, repo) {
        const hasLikedRepo = repositories.includes(repo.id)

        if (hasLikedRepo) {
            return repositories.filter((rep) => rep !== repo.id)
        }
        return [...repositories, repo.id]
    }

    function saveLikedRepos(repos) {
        setLikedRepos(repos)
        localStorage.setItem(ctx.dataUser.login, JSON.stringify(repos))
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
                            const classLike = likedRepos.includes(repo.id) ? "hearth liked" : "hearth"
                            return (
                                <div key={repo.id} className="repository">
                                    <div className="repository-item" onClick={() => handleClickRepo(repo)}>
                                        <h3>{repo.name}</h3>
                                        <p>{repo?.description}</p>
                                    </div>
                                    <div className="repo-like">
                                        <CgHeart className={classLike} onClick={(e) => handleLikedRepo(e, repo)} />
                                    </div>
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