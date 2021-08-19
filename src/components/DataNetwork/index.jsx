import './style.css'

import { useHistory } from 'react-router-dom';

import { GoX } from "react-icons/go";

function DatasNetworkUser(props) {

    const history = useHistory()

    function handleRepositories(route) {
        history.push(route)
    }

    return (
        <div className="container-geral">
            <GoX className="close" onClick={() => handleRepositories('/')} />
            <div className="container-header">
                <h1>{props.title}</h1>
                <div className="container-body">
                    {
                        props.data.map((f) => {
                            return (
                                <div key={f.id} className="container-item">
                                    <img src={f.avatar_url} alt={f.login} />
                                    <span>@{f.login}</span>
                                    <a href={f.html_url}>Visitar</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default DatasNetworkUser;