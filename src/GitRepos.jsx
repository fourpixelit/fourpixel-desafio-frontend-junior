import baseURL from './baseGit'

async function getDataGithubUserRepos(user) {
    const url = baseURL()
    const dataRepos = await fetch(`${url}${user}/repos?per_page=100`)

    if ((dataRepos.ok) && (dataRepos.status === 200)) {
        const dataReposJson = dataRepos.json()
        console.log('consulta repo')
        return dataReposJson
    }
    console.log(`erro repos`)
    return {
        error: true,
        message: 'Repositório não encontrado.'
    }
}

export default getDataGithubUserRepos;