import React, { useState } from 'react';
import './style.css'
import getDataGithubUser from '../../Git';
import SearchIcon from '@material-ui/icons/Search';

import User from '../User';
import Counters from '../Counters';
import Repos from '../Repos';

function SearchedUser() {

    const [dataUser, setDataUser] = useState({})
    const [searchedUser, setSearchedUser] = useState('')
    const [isSearched, setIsSearched] = useState(false)
    const [isUserFound, setUserFound] = useState(false)

    async function getData() {
        setUserFound(false)
        setIsSearched(false)

        if (searchedUser) {
            const response = await getDataGithubUser(searchedUser)
            setDataUser(response)
            if (response.error) {
                return
            }
            setUserFound(true)
            setIsSearched(true)
        }
    }

    return (
        <div className="container">
            <div className="search-group">
                <h2>Perfil Github</h2>
                <div className="search">
                    <input
                        type="text"
                        name="user"
                        id="user"
                        value={searchedUser}
                        placeholder="Pesquise seu usuário aqui"
                        onChange={e => setSearchedUser(e.target.value)}
                    />
                    <button onClick={getData}><SearchIcon /> </button>
                </div>
            </div>

            {isSearched &&
                <div className="result">
                    <User name={dataUser?.name} login={dataUser?.login} avatar={dataUser?.avatar_url} bio={dataUser?.bio} />
                    <Counters repos={dataUser?.public_repos} followers={dataUser?.followers} following={dataUser?.following} />
                </div>
            }
            {isSearched &&
                <div className="result-repos">
                    <Repos user={searchedUser} />
                </div>
            }

            {isUserFound === false &&
                <span>{dataUser.message}</span>
            }
        </div>
    );
}

export default SearchedUser;