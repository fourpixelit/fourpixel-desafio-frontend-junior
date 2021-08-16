import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = props => {
    const [dataUser, setDataUser] = useState({})
    const [dataRepos, setDataRepos] = useState([])

    return(
        <context.Provider 
            value={{
                dataUser,
                setDataUser,
                dataRepos,
                setDataRepos
            }}    
        >
            {props.children}
        </context.Provider>
    );
}