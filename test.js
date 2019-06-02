'use strict'

const a = require('assert')
const speed = require('.')

speed()
.then((speed) => {
	a.strictEqual(typeof speed, 'number')
	a.ok(speed >= 0)
	a.ok(speed <= 300)
})
.catch((err) => {
	console.error(err)
	process.exit(1)
})
