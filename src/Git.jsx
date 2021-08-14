import baseURL from './baseGit'

async function getDataGithubUser(user) {
    const url = baseURL()
    const dataUser = await fetch(`${url}${user}`)

    if ((dataUser.ok) && (dataUser.status === 200)) {
        const dataUserJson = dataUser.json()
        return dataUserJson
    }
    console.log(`erro`)
    return {
        error: true,
        message: 'Usuário não encontrado.'
    }
}

export default getDataGithubUser;