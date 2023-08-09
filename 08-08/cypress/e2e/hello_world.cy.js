describe('#Site', () => {
  it('Valid title', {
    defaultCommandTimeout: 10000
  }, () => {
    cy.visit('https://www.grupointegrado.br/')
    cy.title().should('be.equal', "Home - Centro Universitário Integrado")

  })
})
