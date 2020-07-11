// https://docs.cypress.io/api/introduction/api.html

describe('Todo', () => {
  it('Can create todos', () => {
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

  it('Can delete todos', () => {
    cy.visit('/')
    cy.contains('h2', 'My todolist')

    cy.get('form').get('#action-add-todo').get("input")
        .type('write_e2e_tests')
        .should('have.value', 'write_e2e_tests')

    cy.get('form').submit()

    cy.get('#app').get('ul').children().should('have.length', 1)

    cy.get('#app').get('ul')
        .first().find('button').click()

    cy.get('#app').get('ul').should('be.empty')


  })
})
