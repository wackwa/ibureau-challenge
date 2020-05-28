const searchVerbete = require('./src/searchVerbete')
const storeVerbete = require('./src/storeVerbete')

async function main() {
    const verbete = await searchVerbete('transporte')

    await storeVerbete(verbete)

    console.log('Salvo com sucesso!')
}

main()