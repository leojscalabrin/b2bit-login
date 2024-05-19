describe("User Profile", () => {
  beforeEach(() => {
    cy.visit("/profile");
  });

  it("should display user information correctly", () => {
    cy.contains("Your Name");
    cy.contains("Your Email");
    cy.contains("Profile picture");
  });

  it("should display the user profile picture", () => {
    cy.get('img[alt="Profile Picture"]').should("be.visible");
  });

  it("should log out when the logout button is clicked", () => {
    cy.get("button").contains("Logout").click();
    cy.url().should("include", "/");
  });
});
