const { describe, it } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
let baseUrl;
describe('Job API', () => {
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
    let count = 0;
    let resourceId; // Variable to store the ID of the resource

    // Test Suite for adding resources
    describe('POST /add-job', () => {
        it('should return 500 for validation errors', (done) => {
            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job', location: 'Test Location', salary: 'Test Salary', description:
                        'Short', companyEmail: 'invaild-email', CompanyName: 'Test Name'
                })
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    expect(res.body.message).to.equal('Validation error');
                    done();
                });
        });
        it('should return 400 for validation errors', (done) => {
            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job', location: 'Test Location', salary: 'Test Salary', description:
                        'Short', companyEmail: 'invaild-email', CompanyName: 'Test Name'
                })
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    expect(res.body.message).to.equal('Validation error');
                    done();
                });
        });
        it('should add a new job', (done) => {
            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job', location: 'Test Location', salary: '10000', description:
                        'Short', companyEmail: 'test@gmail.com', CompanyName: 'Test Name'
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body.length).to.equal(count + 1);
                    resourceId = res.body[res.body.length - 1].id; // Store the ID of the newly added resource
                    done();
                });
        });
    });

});