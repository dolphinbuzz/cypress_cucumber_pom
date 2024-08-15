import {faker} from '@faker-js/faker'
const ElementsInit = require('../../../support/elements/inicialPage.elements.json')


class Projeto{
    createProject(){
        createProject()
    }
}

function createProject(){
    cy.get(ElementsInit.cria_projeto_btn).click()
}





module.exports = Projeto