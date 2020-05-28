const searchProject = require('./searchProject')
const getData = require('./getData')

async function getProjects(site, $) {
    const rowProjects = $('section.container > .row').length - 1 // Retira a alert row
    let numberOfRows = 0
    let projects = []

    while(numberOfRows < rowProjects) {
        const projectsQuantity = $(`section.container > .row:nth-child(${'2n' + numberOfRows}) > .col-lg-6 > .card`).length
        
        let numberOfProjects = 1

        while(numberOfProjects <= projectsQuantity) {
            const project = await searchProject(site, $, numberOfRows, numberOfProjects)
            projects.push(getData(project))

            ++numberOfProjects
        }
        ++numberOfRows
    }

    return projects
}

module.exports = getProjects