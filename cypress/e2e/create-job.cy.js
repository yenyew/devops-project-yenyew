describe('Job Management Frontend', () => {
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

  it('should add a new job', () => {
    // Wait for the "Add New Job" button and click it
    cy.get('button[data-target="#resourceModal"]').should('be.visible').click();

    // Ensure the modal is fully open
    cy.get('#resourceModal').should('be.visible');

    // Fill in the form inside the modal
    cy.get('#addJobName').type('Test Job');
    cy.get('#addLocation').type('Test Location');
    cy.get('#addDescription').type('Test Description');
    cy.get('#addSalary').type('10000');
    cy.get('#addCompanyEmail').type('test@example.com');
    cy.get('#addCompanyName').type('Test Company');

    // Click the "Add New Job" button inside the modal
    cy.get('#resourceModal .btn-primary').click();

    // Verify the modal closes after the job is added
    cy.get('#resourceModal').should('not.be.visible');

    // Confirm the job appears in the listings
    cy.get('#job-listings').contains('Test Job').should('exist');
  });

  it('should display the newly added job on reload', () => {
    // Reload the page to ensure persistence
    cy.visit(baseUrl);

    // Check that the job added in the previous test exists
    cy.get('#job-listings').contains('Test Job').should('exist');
  });
});
