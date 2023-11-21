describe('film',()=>{
  it("login and check film review",()=>{
    cy.visit("http://localhost:3000/login")
    cy.get('[data-cy="email"]').should('have.text','')
    cy.get('[data-cy="password"]').should('have.text','')
    cy.get('[data-cy="email"]').type('abc@gmail.com')
    cy.get('[data-cy="password"]').type('123')
    cy.get('[data-cy="button"]').click()

    cy.get('[data-cy="card"]').last().click()

  })

})

