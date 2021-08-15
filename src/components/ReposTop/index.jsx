import { useState } from 'react';

import './style.css'

import { CgMore, CgCheck } from "react-icons/cg";
import ReposAll from '../ReposAll';

function ReposTopThree(props) {

    const [showAllRepositories, setShowAllRepositories] = useState(false)

    const repositories = props.repos
    const ordernedRepositories = repositories.sort((a, b) => b.watchers - a.watchers)
    const filteredRepositories = ordernedRepositories.filter((repos, index) => index < 3)

    console.log('ordenados:', ordernedRepositories)
    console.log('filtrados:', filteredRepositories)

    function handleRepositories() {
        console.log(`clicado`)
        setShowAllRepositories(true)
    }

    return (
        <div className="repositories">
            <h4>Repositórios Populares</h4>
            {
                filteredRepositories.map(repo => {
                    return (
                        <a href="/" key={repo.id}>
                            <CgCheck className="icon" />
                            <span>{repo.name}</span>
                        </a>
                    )
                })
            }
            <div className="more-repos">
                <a onClick={handleRepositories}>
                    <CgMore className="more-info"/>
                </a>
            </div>

            {showAllRepositories &&
                <div>
                    <ReposAll repos={repositories}/>
                </div>
            }

        </div>
    );
}

export default ReposTopThree;