import React, { useState } from 'react';
import './style.css'
import getDataGithubUser from '../../Git';
import getDataGithubUserRepos from '../../GitRepos';

import { CgSearch } from "react-icons/cg";

import User from '../User';
import Counters from '../Counters';
import ReposTopThree from '../ReposTop';

function SearchedUser() {

    const [dataUser, setDataUser] = useState({})
    const [dataRepos, setDataRepos] = useState({})
    const [searchedUser, setSearchedUser] = useState('')
    const [isSearched, setIsSearched] = useState(false)
    const [isFoundUser, setFoundUser] = useState(false)

    async function getData() {
        setFoundUser(false)
        setIsSearched(false)

        if (searchedUser) {
            const response = await getDataGithubUser(searchedUser)

            const responseRepos = await getDataGithubUserRepos(searchedUser)
            console.log('respositorios:', responseRepos)

            setDataUser(response)
            setDataRepos(responseRepos)

            if (response.error) {
                return
            }
            setFoundUser(true)
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
                    <button onClick={getData}><CgSearch /> </button>
                </div>
            </div>

            {isSearched && isFoundUser &&
                <div className="result">
                    <User name={dataUser?.name} login={dataUser?.login} avatar={dataUser?.avatar_url} bio={dataUser?.bio} />
                    <Counters repos={dataUser?.public_repos} followers={dataUser?.followers} following={dataUser?.following} />
                    <ReposTopThree repos={dataRepos} />
                </div>
            }

            {isFoundUser === false &&
                <span>{dataUser.message}</span>
            }
        </div>
    );
}

export default SearchedUser;