const WEB_API_URL = 'https://poloniex.com/public?command=returnTicker'

const isPositivePercentChange = value => parseFloat(value[1].percentChange) >= 0 
const isNegativePercentChange = value => parseFloat(value[1].percentChange) < 0 

const getQotes = async (growingValues?: boolean) => {
	const options = {
		method: 'GET',
	}
	const request = new Request(WEB_API_URL, options)

	if(growingValues !== undefined) {
		return fetch(request)
			.then(response => response.json())
			.then(quotes => {
				const res = Object.fromEntries(
					Object.entries<Record<string, string | number>>(quotes)
						.filter(growingValues ? 
							isPositivePercentChange : 
							isNegativePercentChange)
						.sort(growingValues ? 
							(a, b) => +b[1].percentChange - +a[1].percentChange :
							(a, b) => +a[1].percentChange - +b[1].percentChange)
				)
				return res
			})
	}

	return fetch(request)
		.then(response => response.json())
}

export { getQotes }