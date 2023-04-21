import "cypress-iframe";

describe("The Pay Page", () => {
  it("should fill out email address", () => {
    cy.visit("/pay");
    cy.get('input[type="submit"]').click();
    cy.url().should("include", "checkout.stripe.com");
    cy.get("#email").type("test@example.com");
  });
});
