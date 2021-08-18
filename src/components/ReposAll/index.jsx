import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './style.css'

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
    }, [])

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
            // const isLiked = target.getAttribute('class').includes('liked') ? true : false
            updateLikedRepos(repo)
        }
    }

    function updateLikedRepos(repo) {
        const likedReposUserSaved = localStorage.getItem(ctx.dataUser.login)

        let novosArray = []

        if (likedReposUserSaved) {
            novosArray = JSON.parse(likedReposUserSaved)
            const hasLikedRepo = novosArray.includes(repo.id)

            console.log(`oooooooooooooooooo`, hasLikedRepo)

            if (hasLikedRepo) {
                novosArray = novosArray.filter((r) => r.id !== repo.id)
            }

        } else {
            novosArray = [...novosArray, repo.id]
        }

        console.log('savedUserLocalStorage', novosArray)

        setLikedRepos(novosArray)
        localStorage.setItem(ctx.dataUser.login, JSON.stringify(novosArray))
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