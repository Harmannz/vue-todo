// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Create todos', () => {
    cy.visit('/')
    cy.contains('h2', 'My todolist')

    cy.get('form').get('#action-add-todo').get("input")
     .type('write_e2e_tests')
    .should('have.value', 'write_e2e_tests')

    cy.get('form').submit()

    cy.get('form').get('#action-add-todo').get("input")
        .type('second_todo')
        .should('have.value', 'second_todo')

    cy.get('form').submit()

    cy.get('#app').get('ul').children().should('have.length', 2)
    cy.get('#app').get('ul').children()
        .first().contains('p', 'write_e2e_tests')
    cy.get('#app').get('ul').children()
        .first().next().contains('p','second_todo')

  })
})
