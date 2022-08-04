const request = require('supertest');
const fs = require('fs');
const { data } = require('../app/database');
const rawdata = fs.readFileSync('rawData.json');
var acc = JSON.parse(rawdata).acc;
var hash = JSON.parse(rawdata).hash;

describe('Test app routes', function () {
	var server;
	beforeEach(function () {
		server = require('../app/index');
	});

	afterEach(function () {
		server.close();
	});

	it('responds to get /tokenize', function testSlash(done) {
		request(server)
			.get('/tokenize')
			.expect(200, done);
	});

	it('responds to get /detokenize', function testSlash(done) {
		request(server)
			.get('/detokenize')
			.expect(200, done);
	});

	// TODO POST UNIT TESTS
});