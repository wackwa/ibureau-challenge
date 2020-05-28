const capitalize = require('capitalize')

function getAutor($) {
    const regex = /(?:<b>)?([\w\s]+)(?:<\/b>)?/
    const autor = $('dl dd:nth-child(10)')
        .html()
        .split('<br>')
        .map(text => capitalize.words(regex.exec(text)[1]))
        .join(' ')

    return autor
}

module.exports = getAutor