describe("while copying the default template, if the user forgot to click the check box, it should throw an error ", () => {
  it("Check box testing", () => {
    let url = Cypress.config().baseUrl;
    cy.visit(url);

    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();

    // Go to Assessment Criteria template page
    cy.get(".nav-item").invoke("show");
    cy.get("#menu-2 ").trigger("mouseover");
    cy.get(".dropdown").should("be.visible");
    cy.contains("Assessment Criteria").click({ force: true });
    // Clone the default template
    cy.get(".fa-clone").click();
    // Validation
    cy.contains("Default Template");
    // Selecting required fields
    cy.get(".form-control").type("Template1");
    cy.get(".form-select").select("Intermediate");
    cy.get(".fa-pencil").eq(1).click();
    cy.get(".ng-pristine").clear().type("100");
    cy.get(".btn").click();
    cy.contains("Please select atleast one checkbox").should("exist");
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
