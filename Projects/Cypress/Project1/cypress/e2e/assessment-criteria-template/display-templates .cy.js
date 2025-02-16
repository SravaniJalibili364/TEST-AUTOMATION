//Display of Default template in Assessment Criteria page
describe("Display of Default template in Assessment Criteria page", function () {
  it("Coach shall be able to view the default template", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    //Validation - After sign in, It should redirect to the activity page
    cy.url().should("contain", "/activity/history");

    //visit assessment criteria template
    cy.get(".nav-item").invoke("show");
    cy.get("#menu-2 ").trigger("mouseover");
    cy.get(".dropdown").should("be.visible");
    cy.contains("Assessment Criteria").click({ force: true });
    // Validation - user should redirect to assessment criteria template page
    cy.url().should("contain", "user/assessment-template").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
