const axios = require('axios')
const cheerio = require('cheerio')
const querystring = require('querystring')
const getProjects = require('./getProjects')


async function searchVerbete(verbete){
    const site = axios.create({
        baseURL: 'http://www.legislador.com.br/',
        timeout: 5000,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })

    const path = 'LegisladorWEB.ASP?WCI=ProjetoTramite'
    const body = {
        ID: 20,
        dsVerbete: verbete,
        dsTexto: verbete,
        inEOU: 0,
        Navegar: 'Pesquisar',
    }
    const requestData = querystring.stringify(body)
    
    const response = await site.post(path, requestData)
    
    const projects = await getProjects(site, cheerio.load(response.data, { decodeEntities: false }))

    return projects
}

module.exports = searchVerbete