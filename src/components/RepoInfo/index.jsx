import './style.css'

import { GoStar, GoEye, GoX, GoRepoForked, GoRepo, GoMarkGithub } from "react-icons/go";

function RepoInfo(props) {
    console.log('vindo do repo', props, Date(props.repo.created_at))

    function handleCloseInfoRepo() {
        const repoInfo = document.querySelector('.container-repository-info')
        const reposAll = document.querySelector('.repositories-all')

        repoInfo.classList.add('hidden')
        reposAll.classList.remove('hidden')
    }

    return (
        <div className="container-repository-info hidden">
            <GoX className="close" onClick={handleCloseInfoRepo} />
            <h1>{props.repo.name}</h1>
            <p>{props.repo?.description}</p>
            <div className="repository-info">
                <div>
                    <h4>Linguagem</h4>
                    <span>{props.repo?.language}</span>
                </div>
                <div>
                    <h4>Repositório</h4>
                    <a href={props.repo?.html_url} target="_parent" rel="noopener"><GoRepo /></a>
                </div>
                <div>
                    <h4>Github</h4>
                    <a href={props.repo.owner?.html_url} target="_parent" rel="noopener"><GoMarkGithub /></a>
                </div>
            </div>
            <div className="repository-info">
                <div>
                    <h4><GoEye /> Watch</h4>
                    <span>{props.repo.forks_count}</span>
                </div>

                <div>
                    <h4><GoStar /> Star</h4>
                    <span>{props.repo.watchers_count}</span>
                </div>

                <div>
                    <h4> <GoRepoForked /> Fork</h4>
                    <span>{props.repo.stargazers_count}</span>
                </div>
            </div>
        </div>
    );
}

export default RepoInfo;