const Login = require('../../../support/pages/login/login.page')

class Pages{
    constructor(){
        this.login = new Login()
    }
}

module.exports = new Pages()