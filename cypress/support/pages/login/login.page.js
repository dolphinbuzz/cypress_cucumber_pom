//arquivo onde terão as functions, metodos e classes
const ElementsJson = require('../../elements/login.elements.json')
const ElementsJsonInicial = require('../../elements/inicialPage.elements.json')
const param = require('../../../fixtures/login.json')
import { faker } from '@faker-js/faker'

class Login{
//metodos...
    insiroUsuario(){
        insiroUsuario()
    }
    insiroSenha(){
        insiroSenha()
    }
    clicoSignin(){
        clicoSignin()
    }
    realizaLogin(){
        insiroUsuario()
        insiroSenha()
        clicoSignin()
    }
    validaLoginSucesso(){
        validaLoginSucesso()
    }
    insiroSenhaIncorreta(){
        insiroSenhaIncorreta()
    }
    validoMensagemErro(){
        validoMensagemErro()
    }
    insiroUsuarioIncorreto(){
        insiroUsuarioIncorreto()
    }
    clicoRegister(){
        clicoRegister()
    }

    insiroFullName(){
        insiroFullName()
    }
    newUsername(){
        newUsername()
    }
    newEmail(){
        newEmail()
    }
    newEmailConfirm(){
        newEmailConfirm()
    }
    newPass(){
        newPass()
    }
    clickRegister(){
        clickRegister()
    }
    validateNewUser(){
        validateNewUser()
    }

}

//functions...
function insiroUsuario(){
    cy.get(ElementsJson.input_login).type(Cypress.env('user'))
}

function insiroSenha(){
    cy.get(ElementsJson.input_senha).type(Cypress.env('pass'))
}

function clicoSignin(){
    cy.get(ElementsJson.login_bnt).click()
}

function validaLoginSucesso(){
    cy.get(ElementsJsonInicial.title)
        .should('exist')
        .should('be.visible')
}

function insiroSenhaIncorreta(){
    cy.get(ElementsJson.input_senha).type('senha')
}

function validoMensagemErro() {
    cy.get(ElementsJson.msg_erro).should('be.visible')
}

function insiroUsuarioIncorreto(){
    cy.get(ElementsJson.input_login).type('user')
}

function clicoRegister() {
    cy.get(ElementsJson.aba_register).click()
}

function insiroFullName() {
    Cypress.env('fullName', faker.person.fullName())
    cy.get(ElementsJson.input_full_name).type(Cypress.env('fullName'))
}

function newUsername() {
    Cypress.env('userName', faker.internet.userName())
    cy.get(ElementsJson.input_username).type(Cypress.env('userName'))
}

function newEmail() {
    Cypress.env('email', faker.internet.email())
    cy.get(ElementsJson.input_email).type(Cypress.env('email'))
}

function newEmailConfirm() {
    cy.get(ElementsJson.input_email_confirm).type(Cypress.env('email'))
}

function newPass() {
    cy.get(ElementsJson.input_new_pass).type(param.new_pass)
}

function clickRegister() {
    cy.get(ElementsJson.btn_register).click()
    cy.get(ElementsJsonInicial.msg_login).should('be.visible')
}

function validateNewUser() {
    cy.get(ElementsJsonInicial.user_name).should('contain', Cypress.env('fullName'))
}


module.exports = Login