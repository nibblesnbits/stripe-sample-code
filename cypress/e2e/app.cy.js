const getIframeDocument = (...args) => {
  return (
    cy
      .get("iframe[name*='__privateStripeFrame']", ...args)
      // Cypress yields jQuery element, which has the real
      // DOM element under property "0".
      // From the real DOM iframe element we can get
      // the "document" element, it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its("0.contentDocument")
      .should("exist")
  );
};

const getIframeBody = (...args) => {
  // get the document
  return (
    getIframeDocument(...args)
      // automatically retries until body is loaded
      .its("body")
      .should("not.be.undefined")
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then({ timeout: 10000 }, cy.wrap)
  );
};

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
  it("should navigate to the register page", () => {
    cy.visit("/");

    cy.get(".App").should("exist");

    getIframeBody()
      .get("#Field-numberInput", { timeout: 10000 })
      .type("4242424242424242");
  });
});
