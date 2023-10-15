/// <reference types="Cypress"/>

describe('Test Suite for Automation', function()
{

    this.beforeEach(function(){
        cy.fixture('Testdata').then((data) =>{
            this.data=data
        })
    })

    it('My First Test Case',function(){
    cy.visit("https://www.amazon.in/")
    cy.get("input[id='twotabsearchtextbox']").type(this.data.searchkey+'{enter}')
    //expect(true).to.be(false)
    })


})