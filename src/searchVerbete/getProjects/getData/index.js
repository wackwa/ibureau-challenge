const getTramite = require('./getTramite')
const getAutor = require('./getAutor')

function getData($) {
    const tituloPrincipal = $('.card-header .card-title').html()
    const data = $('dl dd:nth-child(4)').html()
    const situacao = $('dl dd:nth-child(2)').html()
    const assunto = $('dl dd:nth-child(8)').html()
    const autor = getAutor($)
    const ementa = $('.card .card-body:nth-child(5) p').html()
    tramiteQuantity = $('#idTramite .table tbody tr').length
    let tramite = getTramite($, tramiteQuantity)

    return {
        tituloPrincipal,
        data,
        situacao,
        assunto,
        autor,
        ementa,
        tramite
    }
}

module.exports = getData