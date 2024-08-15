const pageLogin = require('../../pages/login/page.model')
const {Then, And, Given, When} = require('cypress-cucumber-preprocessor/steps')

Given('que acesso a página inicial',()=>{
    
})

When('insiro usuario',()=>{
    pageLogin.login.insiroUsuario()
})

And('insiro senha',()=>{
    pageLogin.login.insiroSenha()
})

And('clico em Sign in',()=>{
    pageLogin.login.clicoSignin()
})

Then('valido que o login foi realizado com sucesso',()=>{
    pageLogin.login.validaLoginSucesso()
})

And('insiro senha incorreta',()=>{
    pageLogin.login.insiroSenhaIncorreta()
})

Then('valido mensagem de erro',()=>{
    pageLogin.login.validoMensagemErro()
})

When('insiro usuario incorreto',()=>{
    pageLogin.login.insiroUsuarioIncorreto()
})

When('clico na aba Register',()=>{
    pageLogin.login.clicoRegister()
})

And('insiro o nome completo',()=>{
    pageLogin.login.insiroFullName()
})

And('insiro o username',()=>{
    pageLogin.login.newUsername()
})
And('insiro o email',()=>{
    pageLogin.login.newEmail()
})
And('insiro email de confirmação',()=>{
    pageLogin.login.newEmailConfirm()
})
And('insiro uma nova senha',()=>{
    pageLogin.login.newPass()
})
And('clico em Register',()=>{
    pageLogin.login.clickRegister()
})

Then('valido que o usuario foi criado com sucesso',()=>{
    pageLogin.login.validateNewUser()
})

Given('que realizo login',()=>{
    pageLogin.login.realizaLogin()
})