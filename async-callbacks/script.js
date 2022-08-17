// async and callbacks

// setTimeout
// function someCallback() {
// 	console.log('Hi everybody 🙂')
// }

// const id = setTimeout(function () {
// 	console.log('Hi everybody 🙂')
// }, 2000)
// console.log('this runs first ⏰')
// you can cancel the triggered timeout
// clearTimeout(id)

let counter = 1
let timeoutId
function callback() {
	console.log(counter)
	timeoutId = setTimeout(callback, 1000)
	counter++
	if (counter > 3) {
		clearTimeout(timeoutId)
		console.log('done')
	}
}
// callback()

// a better way to build a counter
// setInterval
let i = 1
setInterval(function () {
	console.log(i)
	i++
}, 1000)