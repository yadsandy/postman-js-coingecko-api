const request = require('supertest');
const expect = require('chai').expect;

// Replace with your actual API key
const apiKey = 'CG-MrZTDqigbpkzzTobjWKz3N5r';

describe('SQL Injection Test', function() {
    it('should not allow SQL injection in query parameters', function(done) {
        const sqlInjectionPayload = "' OR 1=1 -- "; // SQL Injection attempt

        request('https://api.coingecko.com')
            .get('/api/v3/simple/price')
            .set('x-cg-pro-api-key', apiKey)  // Add the API key header
            .query({ ids: sqlInjectionPayload, vs_currencies: 'usd' })
            .end(function(err, res) {
                // Assert that the response code is not 200 if the SQL injection is successful
                expect(res.status).to.not.equal(200, "SQL Injection was successful or not handled.");
                done();
            });
    });
});
