describe("Login", () => {
  it("should log in successfully with valid credentials", () => {
    cy.visit("/");
    cy.get('input[name="email"]').type("user@example.com");
    cy.get('input[name="password"]').type("password");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/profile");
  });

  it("should display an error message with invalid credentials", () => {
    cy.visit("/");
    cy.get('input[name="email"]').type("invalid@example.com");
    cy.get('input[name="password"]').type("invalidpassword");
    cy.get('button[type="submit"]').click();
    cy.contains("Credenciais incorretas. Por favor, tente novamente.");
  });
});
