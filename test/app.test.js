const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');

// {
//     count: 2,
//     average: 5,
//     highest: 'a',
//     'a': 6,
//     'b': 4
//   }
describe('GET /frequency', () => {
	it('should return a message from GET /', () => {
		return supertest(app)
			.get('/frequency')
			.query('s=hello')
			.expect(200)
			.expect('Content-Type', /json/)
			.then((res) => {
				expect(res.body).to.be.an('object');
				expect(res.body.unique).to.be.equal(4);
				expect(res.body.highest).to.be.equal('l');
				expect(res.body.average).to.be.equal(1.25);
			});
	});
	it('should return a message from GET /', () => {
		return supertest(app).get('/frequency').query('').expect(400).then((res) => {
			expect(res.body).to.be.an('object');
		});
	});
});
