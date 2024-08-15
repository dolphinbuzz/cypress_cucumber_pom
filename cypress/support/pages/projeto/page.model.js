const Projeto = require ('../../../support/pages//projeto/projeto.page')

class Pages{
    constructor(){
        this.projeto = new Projeto()
    }
}
module.exports = new Pages()