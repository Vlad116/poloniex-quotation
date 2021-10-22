import React, { useState, useEffect } from 'react'
import LinkButton from '../components/LinkButton'
import QuotesTable from '../components/QuotesTable/QuotesTable'
import { getQotes } from '../services/TickerService'

export type IQuotation = {
	sourceName: string;
}

const columns = { 'tickerName': 'Название', 'last': 'Цена последней сделки', 'highestBid': 'Высшая ставка', 'percentChange': 'Изменение за день' }

const Quatation: React.FC<IQuotation> = ({ sourceName }) => {
	const [quotes, setQuotes] = useState<{ [k: string]: Record<string, string | number> }>()

	useEffect(() => {
		(async () => {
			const isGrowingValues = sourceName === 'Growing quotes'
			setQuotes(await getQotes(isGrowingValues))
		})()
	}, [])

	return (
		<div>
			<h1>
				<LinkButton text='🔙 to about' route='about' />
				<p>Source API: {sourceName}</p>
				<QuotesTable columns={columns} data={quotes !== undefined ? quotes : undefined} />
			</h1>
		</div>
	)
}


export default React.memo(Quatation)