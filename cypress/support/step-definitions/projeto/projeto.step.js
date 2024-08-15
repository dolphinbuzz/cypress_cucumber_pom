const pageProject = require ('../../pages/projeto/page.model')
const {Then, And, Given, When} = require('cypress-cucumber-preprocessor/steps')

Given('clico no botão Create a project',()=>{
    pageProject.projeto.createProject()
})