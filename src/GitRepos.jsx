import baseURL from './baseGit'

async function getDataGithubUserRepos(user) {
    const url = baseURL()
    const dataRepos = await fetch(`${url}${user}/repos`)

    if ((dataRepos.ok) && (dataRepos.status === 200)) {
        const dataReposJson = dataRepos.json()
        return dataReposJson
    }
    console.log(`erro repos`)
    return {
        error: true,
        message: 'Usuário não encontrado.'
    }
}

export default getDataGithubUserRepos;