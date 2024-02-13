describe("home page", () => {
  const url = "http://localhost:3001"

  beforeEach(() => {
    cy.visit(url)
  })

  context("Hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.getByData("hero-heading")
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })

    it("the data table on the homepage are correct", () => {
      const features = ["4 Courses", "25+ Lessons", "Free and Open Source"]
      features.forEach((feature, index) => {
        cy.get("dt").eq(index).contains(feature)
      })
    })
  })

  context("Course section", () => {

    it("First Next.js title contains is displaying the expected text", ()=> {
      cy.getByData("course-title").should("exist").contains("Testing Your First Next.js Application")
    })


    it("Get Strated button navigation => Testing Your First Next.js Application", ()=> {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.url().should('include','/testing-your-first-application')
    })

    it("Get Strated button navigation => Testing Foundations", ()=> {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.url().should('include','/testing-foundations')
    })

    it("Get Strated button navigation => Cypress Fundamentals", ()=> {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.url().should('include','/cypress-fundamentals')
    })





  })
})
