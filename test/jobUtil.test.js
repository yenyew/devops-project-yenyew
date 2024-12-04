const { describe, it } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon'); // Import Sinon.js
chai.use(chaiHttp);

let baseUrl;

describe('Job API with Stubs', () => {
    before(async () => {
        const { address, port } = await server.address();
        baseUrl = `http://${address == '::' ? 'localhost' : address}:${port}`;
    });

    after(() => {
        return new Promise((resolve) => {
            server.close(() => {
                resolve();
            });
        });
    });

    let stubbedService; // To store the stub
    let count = 0;
    let resourceId;

    describe('POST /add-job', () => {
        beforeEach(() => {
            // Stub the implementation of a service method or database call
            stubbedService = sinon.stub(app, 'post');
        });

        afterEach(() => {
            // Restore the stub after each test
            stubbedService.restore();
        });

        it('should return 500 for validation errors', (done) => {
            // Simulate a validation error
            stubbedService.callsFake((req, res) => {
                res.status(400).send({ message: 'Validation error' });
            });

            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job', location: 'Test Location', salary: 'Test Salary', description:
                        'Short', companyEmail: 'invalid-email', CompanyName: 'Test Name'
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Validation error');
                    done();
                });
        });

        it('should add a new job', (done) => {
            // Simulate successful job addition
            stubbedService.callsFake((req, res) => {
                const newJob = {
                    id: 1,
                    name: req.body.name,
                    location: req.body.location,
                    salary: req.body.salary,
                    description: req.body.description,
                    companyEmail: req.body.companyEmail,
                    CompanyName: req.body.CompanyName
                };
                res.status(201).send([newJob]);
            });

            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job', location: 'Test Location', salary: '10000', description:
                        'Short', companyEmail: 'test@gmail.com', CompanyName: 'Test Name'
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('array');
                    expect(res.body.length).to.equal(1); // Adjust as needed
                    resourceId = res.body[0].id; // Use the stubbed ID
                    done();
                });
        });
    });
});
