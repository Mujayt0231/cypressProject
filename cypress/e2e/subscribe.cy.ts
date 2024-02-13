describe('Newsletter Subscribe Form', () => {
  
    const url = "http://localhost:3001";
    const testEmail = "tom@aol.com"
    const testEmailExisting = "john@example.com"

    beforeEach(()=> {
        cy.visit(url)
    })

    it("allows users to subscribe to the email ist", ()=> {
        cy.getByData("email-input").type(testEmail)
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("exist").contains(`${testEmail}`)

    })


    it("doest NOT allow an invalid email address", ()=> {
        cy.getByData("email-input").type("invalid")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")

    })

    it("does NOT allow an existing email address", () => {
        cy.getByData("email-input").type(testEmailExisting)
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains(`${testEmailExisting} already exists.`)
    })

})
