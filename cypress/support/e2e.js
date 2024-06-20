import './commands'
import param from '../../cypress/fixtures/login.json'

beforeEach(()=>{
    cy.visit(param.baseUrl)
})