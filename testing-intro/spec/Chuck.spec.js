const Chuck = require('../src/Chuck')

describe('Chuck', function () {
	let chuck;
	const joke = 'Chuck Norris can divide by zero'

	const mockMath = Object.create(global.Math)
	mockMath.random = function () {
		return 0.5
	}
	global.Math = mockMath
	beforeEach(function () {
		chuck = new Chuck()
	})
	describe('add joke function', function () {
		it('should add a joke', function () {
			// add a joke using addJoke()
			chuck.addJoke(joke)
			expect(chuck.jokes).toContain(joke)
		})
	})
	describe('get random joke function', function () {
		it('(Math.random) always returns 0.5 now', function () {
			expect(Math.random()).toEqual(0.5)
		})
		it('should return a random joke', function () {
			expect(chuck.getRandomJoke()).toEqual('Chuck Norris is the only man to ever defeat a brick wall in a game of tennis');
		});
	})
})