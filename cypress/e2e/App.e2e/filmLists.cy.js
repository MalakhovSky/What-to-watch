describe('Log in and add film',()=>{
  it("Sign in and check films logic",()=>{
    cy.visit("http://localhost:3000/login")
    cy.get('[data-cy="email"]').should('have.text','')
    cy.get('[data-cy="password"]').should('have.text','')
    cy.get('[data-cy="email"]').type('abc@gmail.com')
    cy.get('[data-cy="password"]').type('123')
    cy.get('[data-cy="button"]').click()

    cy.get('[data-cy="card"]').should('have.length', 8)
    for(let i = 0; i < 3;i++){
      cy.contains('Show more').click()
    }
    const num = 25;
    cy.get('[data-cy="card"]').should('have.length', num)
    cy.scrollTo(0, 500)
    cy.get('[data-cy="genre"]').first().click()
    cy.get('[data-cy="card"]').should('have.length.lessThan', num)
    cy.get('[data-cy="myListBtn"]').click()
    cy.get('[data-cy="avatar"]').click()
    cy.get('[data-cy="card"]').should('have.length', 1)

  })
})

