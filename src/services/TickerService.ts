const WEB_API_URL = 'https://poloniex.com/public?command=returnTicker'

const getTicker = async () => {
	const options = {
		method: 'GET',
	}
	// Параметру уже и так указаны
	const request = new Request(WEB_API_URL, options)
	const response = await fetch(request)
	return response
}

export {}