describe("home page", () => {

  const url = "http://localhost:3000";

  beforeEach(() => {
    cy.visit(url)
  })

  it("the h1 contains the correct text", () => {
    cy.get('.text-gray-900').should("exist").contains("Testing Your First Next.js Application")
  })

  it.only("the data table on the homepage are correct", () => {

    const features = [
      "4 Courses",
      "25+ Lessons",
      "Free and Open Source"
    ];

    features.forEach((feature,index) => {
      cy.get("dt").eq(index).contains(feature);
    })

  })
})
