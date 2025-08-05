describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('/')
  })
  it('views',()=>{
    cy.contains('Hello HMR!').should('exist');
  })
  it('counts',()=>{
    cy.contains('Clicked').click();
    cy.contains('Clicked 5 times').should('exist')
  })
})