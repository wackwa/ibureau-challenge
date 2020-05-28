const mongoose = require('../database')

const VerbeteSchema = mongoose.Schema({
    tituloPrincipal: {
        type: String,
        require: true,
    },
    data: {
        type: String,
        require: true,
    },
    situacao: {
        type: String,
        require: true,
    },
    assunto: {
        type: String,
        require: true,
    },
    autor: {
        type: String,
        require: true,
    },
    ementa: {
        type: String,
        require: true
    },
    tramite: [Object]
})

module.exports = mongoose.model('Verbete', VerbeteSchema)