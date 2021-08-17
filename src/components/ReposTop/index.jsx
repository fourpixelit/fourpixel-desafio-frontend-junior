import { useHistory } from 'react-router-dom';

import './style.css'

import { CgMore, CgCheck } from "react-icons/cg";

function ReposTopThree(props) {

    const history = useHistory()

    const repositories = props.repos
    const ordernedRepositories = repositories.sort((a, b) => b.watchers - a.watchers)
    const filteredRepositories = ordernedRepositories.filter((repos, index) => index < 3)

    function handleRepositories(route) {
        history.push(route)
    }

    return (
        <div className="repositories">
            <h4>Repositórios Populares</h4>
            {
                filteredRepositories.map(repo => {
                    return (
                        <div key={repo.id}>
                            <CgCheck className="icon" />
                            <span>{repo.name}</span>
                        </div>
                    )
                })
            }
            <div className="more-repos">
                <span onClick={() => handleRepositories('/repositorios')}>
                    <CgMore className="more-info"/>
                </span>
            </div>
        </div>
    );
}

export default ReposTopThree;