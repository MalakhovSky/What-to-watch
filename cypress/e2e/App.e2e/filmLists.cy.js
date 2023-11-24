describe('films',()=>{
  it("показать все фильмы и добавить в список избранных",()=>{
   cy.login()

    cy.get('[data-cy="card"]').should('have.length', 8)
    for(let i = 0; i < 3;i+=1){
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
  it("Отправка отзыва",()=>{
      cy.login()
      cy.get('[data-cy="card"]').first().click()
      cy.scrollTo(0, 100)
      cy.get('[data-cy="review"]').click()
      cy.get('[data-cy="post"]').should('be.disabled')
      cy.get('[data-cy="star"]').click()
      cy.get('[data-cy="textArea"]').type('some text')
      cy.get('[data-cy="post"]').click()
    })

  it("Запуск плеера",()=>{
    cy.login()
    cy.get('[data-cy="card"]').first().click()
    cy.scrollTo(0, 100)
    cy.get('[data-cy="play"]').click()
    cy.get('[data-cy="play"]').click()
    cy.get('[data-cy="fullScreen"]').click()
    cy.wait(2000)
    cy.get('[data-cy="exit"]').click()

  })


})

