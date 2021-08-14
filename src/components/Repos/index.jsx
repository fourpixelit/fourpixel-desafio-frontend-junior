import { useState } from 'react';
import './style.css'

import getDataGithubUserRepos from '../../GitRepos';

function Repos(props) {
    const [repos, setRepos] = useState([])

    async function getRepos() {
        const response = await getDataGithubUserRepos(props.user)
        setRepos(response)
        if (response.error) {
            return
        }
    }
    getRepos()

    return (
        <div className="repositorys">
            <ul>
                {repos.map((repo, key) => {
                    return (
                        <li key={key}>{repo.name}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Repos;