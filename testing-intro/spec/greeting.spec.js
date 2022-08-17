// this is the test for the greeting function
const greeting = require('../src/greeting')

// test suite
describe('The function greeting', function () {
	// spec - specification
	it('should be a function', function () {
		// expectation using a matcher
		expect(typeof greeting).toBe('function')
	});
	it('should return a greeting string', function () {
		expect(greeting()).toEqual('hello ironhackers');
	});
})

