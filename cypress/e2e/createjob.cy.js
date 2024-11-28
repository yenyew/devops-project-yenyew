describe('JobSpotter Frontend', () => {
  let baseUrl;
  before(() => {
    cy.task('startServer').then((url) => {
      baseUrl = url; // Store the base URL
      cy.visit(baseUrl);
    });
  });
  after(() => {
    return cy.task('stopServer'); // Stop the server after the report is done
  });

  it('should view all jobs', () => {
    cy.visit(baseUrl);
    // Ensure that the resource we just added is visible in the table
    cy.get('#tableContent').contains('Test Job').should('exist');
  });

  it('should add a new job', () => {
    // Open the modal and fill in the form
    cy.get('button[data-target="#resourceModal"]').click();
    cy.get('#name').type('Test Resource', { force: true });
    cy.get('#location').type('Test Location', { force: true });
    cy.get('#description').type('Test Description', { force: true });
    cy.get('#salary').type('10000', { force: true });
    cy.get('#companyEmail').type('test@example.com', { force: true });
    cy.get('#companyName').type('Test Name', { force: true });
    // Click the add resource button
    cy.get('button.btn-primary').contains('Add New Job').click();
    // Verify the resource is in the table
    cy.get('#tableContent').contains('Test Job').should('exist');
  });
});