import "cypress-iframe";

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("should navigate to the register page", () => {
    cy.visit("/");

    cy.get(".App").should("exist");

    cy.frameLoaded("iframe[name*='__privateStripeFrame']");

    cy.iframe().find("#Field-numberInput").type("4242424242424242");
  });
});
