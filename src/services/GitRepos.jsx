import baseURL from './baseGit'

async function getDataGithubUserRepos(user) {
    const url = baseURL()
    const dataRepos = await fetch(`${url}${user}/repos?per_page=100`)

    if ((dataRepos.ok) && (dataRepos.status === 200)) {
        const dataReposJson = dataRepos.json()
        return dataReposJson
    }
    return {
        error: true,
        message: 'Repositório não encontrado.'
    }
}

export default getDataGithubUserRepos;