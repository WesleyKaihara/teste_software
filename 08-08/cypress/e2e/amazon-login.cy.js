describe('#AMAZON - REGISTER PAGE', () => {

  beforeEach(() => {
    cy.visit('https://www.amazon.com.br/')
    cy.get("#nav-link-accountList-nav-line-1").click()
    cy.get('#createAccountSubmit').click()
  })

  it('should be add values in form',() => {
    cy.get("#ap_customer_name").type("Juquinha da Silva")
    cy.get("#ap_email").type("juquinha312@gmail.com")
    cy.get("#ap_password").type("juquin")
    cy.get("#ap_password_check").type("juquin")
    cy.get("#continue").click()
  })

})
