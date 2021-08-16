import React, { useState, useContext } from 'react';

import { CgSearch } from "react-icons/cg";

import './style.css'
import getDataGithubUser from '../../Git';
import getDataGithubUserRepos from '../../GitRepos';

import { context } from '../../context';
import User from '../User';
import Counters from '../Counters';
import ReposTopThree from '../ReposTop';

function SearchedUser() {

    const ctx = useContext(context)

    // const [dataUser, setDataUser] = useState({})
    // const [dataRepos, setDataRepos] = useState([])
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

            ctx.setDataUser(response)
            ctx.setDataRepos(responseRepos)

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

            { ctx.dataUser.name &&//isSearched && isFoundUser &&
           /// TRATAR ESSA PARTE PARA QUE AO VOLTAR ELA ESTEJA EXIBIDA 
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