function getTramite($, quantity) {
    let tramite = []
    while(quantity > 0){
        const tituloProjeto = $(`#idTramite .table tr:nth-child(${quantity}) td:nth-child(1) dl dt`).html()
        const extraInfoProjeto = $(`#idTramite .table tr:nth-child(${quantity}) td:nth-child(1) dl dd`).text()
            .split('\n')
            .map(text => text)
            .join(' ')

        const projeto = [tituloProjeto, extraInfoProjeto].join(' ')
        const entrada = $(`#idTramite .table tr:nth-child(${quantity}) td:nth-child(2)`).html()
        const prazo = $(`#idTramite .table tr:nth-child(${quantity}) td:nth-child(3)`).html()
        const devolucao = $(`#idTramite .table tr:nth-child(${quantity}) td:nth-child(4)`).html()

        tramite.push({ projeto, entrada, prazo, devolucao })
        --quantity
    }
    tramite.reverse()

    return tramite
}

module.exports = getTramite