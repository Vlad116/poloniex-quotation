import React from 'react'

interface IQuotesTable {
	columns: Record<string, string>,
	data: { [k: string]: Record<string, string | number> } | undefined
}

const QuotesTable: React.FC<IQuotesTable> = ({ columns, data }) => {
	return (
		<table>
			<thead>
				<tr>
					{Object.keys(columns).map((key, keyIndex) => (
						<th key={key}>{columns[key]}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data !== undefined && Object.keys(data).map((quoteName, keyIndex) => {
					// имя тикера, last, highestBid и percentChange.
					const quote = data[quoteName]
					return (
						<tr key={quote.id}>
							<td className="">{quoteName}</td>
							<td className="">{quote.last}</td>
							<td className="">{quote.highestBid}</td>
							<td className="">{quote.percentChange}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default React.memo(QuotesTable)