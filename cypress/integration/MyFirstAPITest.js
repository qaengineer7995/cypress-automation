/// <reference types="Cypress"/>
import HomePOM from '../pageObjects/HomePOM'
describe('API test Suite', function()
{

//Test Case
    it('First API Test Case',function(){
    cy.request({
    method:'GET',
    url:'https://dummy.restapiexample.com/api/v1/employees',
    //failOnStatusCode: false,
    headers:[{
    //"Postman-Token":"<calculated when request is sent>",
    "Host":"<calculated when request is sent>",
    "User-Agent":"PostmanRuntime/7.33.0",
    "Accept":"*/*",
    "Accept-Encoding":"gzip, deflate, br",
    "Host":"<calculated when request is sent>",
    "Connection":"keep-alive",
    }],
   body:[{

    }],
   }).then(function(response){
    cy.log("RESPONSE BODY"+JSON.stringify(response.body))
    cy.log("RESPONSE HEADERS",+JSON.stringify(response.headers))
    cy.log("COMPLETE RESPONSE",+JSON.stringify(response))
    expect(response.body).property('status','success')
    //expect(response.status).to.be(200)
    expect(response.body).property('message','Successfully! All records has been fetched.')
   })

    })


})