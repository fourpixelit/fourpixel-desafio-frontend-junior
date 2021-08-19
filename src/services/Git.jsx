import baseURL from './baseGit'

async function getDataGithubUser(user) {
    const url = baseURL()
    try {
        const dataUser = await fetch(`${url}${user}`)

        if ((dataUser.ok) && (dataUser.status === 200)) {
            const dataUserJson = dataUser.json()
            return dataUserJson
        }
        return {
            error: true,
            message: 'Usuário não encontrado.'
        }
    } catch (error) {
        alert("Encontramos um erro ao fazer sua requisição! " + error)
    }
}

export async function getDataGithubFollowersFollowing(user, type) {
    const url = baseURL()
    try {
        const dataUser = await fetch(`${url}${user}/${type}`)

        if ((dataUser.ok) && (dataUser.status === 200)) {
            const dataUserJson = dataUser.json()
            return dataUserJson
        }
        return {
            error: true,
            message: 'Usuário não encontrado.'
        }
    } catch (error) {
        alert("Encontramos um erro ao fazer sua requisição! " + error)
    }
}

export default getDataGithubUser;
