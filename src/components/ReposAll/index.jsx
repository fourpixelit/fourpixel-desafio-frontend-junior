import './style.css'

import { CgCheck } from "react-icons/cg";

function ReposAll(props) {

    const repositories = props.repos
    
    return (
        <div className="repositories-all">
            <h4>Todos Repositórios</h4>
            {
                repositories.map(repo => {
                    return (
                        <a href="/" key={repo.id}>
                            <CgCheck className="icon" />
                            <span>{repo.name}</span>
                        </a>
                    )
                })
            }
        </div>
    );
}

export default ReposAll;