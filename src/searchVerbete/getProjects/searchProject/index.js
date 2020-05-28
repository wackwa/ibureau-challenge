const cheerio = require('cheerio')

async function searchProject(site, $, row, projectNumber) {
    const regex = /(?:WinProjetoTXT\()(.*)(?:\))/

    const result = regex.exec($(`section.container > .row:nth-child(${'2n' + row}) .col-lg-6:nth-child(${projectNumber}) > .card .card-body`).html())

    const res = result[1].split(',')

    const ID = res[0]
    const Especie = res[1]
    const Projeto = res[2]
    const anoProjeto = res[3]
    const Verbete = res[4]
    
    const path = 'LegisladorWEB.ASP'
    const params = `?WCI=ProjetoTexto&ID=${ID}&inEspecie=${Especie}&nrProjeto=${Projeto}&aaProjeto=${anoProjeto}&dsVerbete=${Verbete}`

    const response = await site.get(path + params)

    return cheerio.load(response.data, { decodeEntities: false })
}

module.exports = searchProject