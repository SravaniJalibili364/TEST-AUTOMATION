//coach shall be able to see all the performance analysis for all the students in the group.
describe("coach shall be able to see all the performance analysis for all the students in the group.", function () {
  it("coach shall be able to see all the performance analysis for all the students in the group.", function () {
    //Login with coach credentials.
    let url = Cypress.config().baseUrl;
    cy.visit(url);
    cy.contains("Sign in").click();
    cy.get("#email").type("sowbhagya3696+4@gmail.com");
    cy.get("#password").type("Sathwik@1719");
    cy.get("form").submit();
    cy.wait(1000);
    //Open the group.
    cy.get('a[href*="/user/groups"]').click({ force: true });
    cy.wait(4000);
    //go to groups
    cy.get(".text-capitalize").eq(0).click();    
    cy.wait(2000);
    //go to Analysis
    cy.contains("Analysis").click();
    cy.wait(1000);
    //View all metrics and performance analysis
    cy.contains("Overall Analysis").click();
    cy.get(".fas").eq(9).click();
    // cy.wait(1000)
    cy.get(".p-dialog-header-close-icon").click();
    cy.get(".fas").eq(10).click();
    cy.get(".p-dialog-header-close-icon").click();
    //VALIDATION
    //Observe graphs manually
    cy.url("https://dev02.speechpundit.com/user/groups/sowji123").should(
      "exist"
    );
    //--TEAR DOWN --//
    cy.get(".fa-sign-out-alt").click({ force: true });
  });
});
