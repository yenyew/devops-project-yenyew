const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let baseUrl;

describe('Job API', () => {
    before(async () => {
        const { address, port } = await server.address();
        baseUrl = `http://${address === '::' ? 'localhost' : address}:${port}`;
    });

    after(() => {
        return new Promise((resolve) => {
            server.close(() => {
                resolve();
            });
        });
    });

    let resourceId; // Variable to store the ID of the resource

    // Test Suite for adding resources
    describe('POST /add-job', () => {
        it('should return 400 when required fields are missing', (done) => {
            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job',
                    location: 'Test Location',
                    salary: '10000',
                    companyEmail: 'test@gmail.com',
                    // Missing 'description' and 'companyName'
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.have.property('message', 'All fields are required');
                    done();
                });
        });
    
        it('should return 400 for invalid email format', (done) => {
            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job',
                    location: 'Test Location',
                    salary: '10000',
                    description: 'Valid description',
                    companyEmail: 'invalid-email',
                    companyName: 'Test Company',
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.have.property('message', 'Invalid email format');
                    done();
                });
        });
    
        it('should return 400 for description shorter than 6 characters', (done) => {
            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job',
                    location: 'Test Location',
                    salary: '10000',
                    description: 'Short',
                    companyEmail: 'test@gmail.com',
                    companyName: 'Test Company',
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.have.property('message', 'Description must be at least 6 characters long');
                    done();
                });
        });
    
        it('should return 400 for invalid salary', (done) => {
            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Test Job',
                    location: 'Test Location',
                    salary: '-1000', // Negative salary
                    description: 'A valid description',
                    companyEmail: 'test@gmail.com',
                    companyName: 'Test Company',
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body).to.have.property('message', 'Salary must be a positive number');
                    done();
                });
        });
    
        it('should add a new job successfully', (done) => {
            chai.request(baseUrl)
                .post('/add-job')
                .send({
                    name: 'Valid Job',
                    location: 'Valid Location',
                    salary: '10000',
                    description: 'This is a valid description',
                    companyEmail: 'test@example.com',
                    companyName: 'Valid Company',
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('_id'); // Assuming MongoDB generates an `_id`
                    done();
                });
        });
    
        it('should handle server errors gracefully', (done) => {
            // Simulate a server error by sending invalid data that could cause a failure
            chai.request(baseUrl)
                .post('/add-job')
                .send({})
                .end((err, res) => {
                    expect(res).to.have.status(500);
                    expect(res.body).to.have.property('message', 'Internal Server Error');
                    done();
                });
        });
    });
    
});
