import './style.css'

import React, { useState, useContext } from 'react';

import { CgSearch } from "react-icons/cg";

import { context } from '../../context';
import getDataGithubUser from '../../services/Git';
import getDataGithubUserRepos from '../../services/GitRepos';
import User from '../User';
import Counters from '../Counters';
import ReposTopThree from '../ReposTop';

function SearchedUser() {

    const ctx = useContext(context)

    const [searchedUser, setSearchedUser] = useState('')
    const [isFoundUser, setFoundUser] = useState(false)

    async function getData() {

        if (searchedUser) {
            const response = await getDataGithubUser(searchedUser)

            const responseRepos = await getDataGithubUserRepos(searchedUser)

            ctx.setDataUser(response)

            if (response.error) {
                setFoundUser(false)
                return
            }

            ctx.setDataRepos(responseRepos)
            setFoundUser(true)
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

            {ctx.dataUser.name &&
                <div className="result">
                    <User name={ctx.dataUser?.name} login={ctx.dataUser?.login} avatar={ctx.dataUser?.avatar_url} bio={ctx.dataUser?.bio} />
                    <Counters repos={ctx.dataUser?.public_repos} followers={ctx.dataUser?.followers} following={ctx.dataUser?.following} />
                    <ReposTopThree repos={ctx.dataRepos} />
                </div>
            }

            {isFoundUser === false &&
                <span>{ctx.dataUser.message}</span>
            }
        </div>
    );
}

export default SearchedUser;