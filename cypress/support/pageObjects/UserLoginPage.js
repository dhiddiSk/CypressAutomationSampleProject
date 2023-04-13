class UserLoginPage {
  login(userName, userLoginPassword) {
    this.userName = typeof userName !== "undefined" ? userName : "";
    this.loginPassowrd =
      typeof userLoginPassword !== "undefined" ? userLoginPassword : "";

    // Typing in login userName
    if (this.userName.length === 0) {
      cy.get("#username").invoke("val", "");
    } else if (this.userName.length > 0) {
      cy.get("#username").type(this.userName);
    }

    // Typing in login password
    if (this.loginPassowrd.length === 0) {
      cy.get("#password").invoke("val", "");
    } else if (this.loginPassowrd.length > 0) {
      cy.get("#password").type(this.loginPassowrd);
    }
  }
}

export default UserLoginPage;
