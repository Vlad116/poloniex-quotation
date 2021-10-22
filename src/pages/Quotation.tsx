import * as React from 'react'

export type IQuotation = {
	SourceName: string;
}

const Quatation: React.FC<IQuotation> = ({ SourceName }) => {
	return (
		<div>
			<h1>Source API: {SourceName} </h1>
		</div>
	)
}


export default React.memo(Quatation)