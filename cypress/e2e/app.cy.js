describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("should navigate to the register page", () => {
    cy.visit("/");

    cy.get(".App").should("exist");

    cy.get("#Field-numberInput").type("4242424242424242");
  });
});
