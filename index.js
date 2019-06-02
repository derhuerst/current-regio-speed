'use strict'

const fetchStatus = require('digital-im-regio-portal-client')

const fetchSpeed = () => {
	return fetchStatus().then(status => status.speed)
}

module.exports = fetchSpeed
