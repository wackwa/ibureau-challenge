const VerbeteModel = require('../app/models/Verbete')

async function storeVerbete(verbete) {
    await VerbeteModel.create(verbete)
}

module.exports = storeVerbete