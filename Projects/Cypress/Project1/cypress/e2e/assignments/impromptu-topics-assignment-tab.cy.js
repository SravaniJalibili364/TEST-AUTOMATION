//User shall be able to access the impromptu speech topics under Assignment tab
describe("User shall be able to access the impromptu speech topics under Assignment tab", function () {
  it("User shall be able to access the impromptu speech topics under Assignment tab", function () {
    // visit signin url.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+18@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.contains("Assignments").trigger("mouseover");
    cy.contains("Impromptu").trigger("mouseenter", { force: true });
    cy.contains("Topic 19").click({ force: true });
    cy.get(".p-button-label").click();
    //VALIDATION
    cy.url("https://dev02.speechpundit.com/record");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
