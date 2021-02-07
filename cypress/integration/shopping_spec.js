describe('Shopping App', () => {
  it('shows articles', () => {
    cy.visit('http://localhost:8080')

    cy.get(':nth-child(1) > .bg-white > .flex-1 > .text-gray-900').contains('Moustache Samedi 27 Trail 8')
  })
})