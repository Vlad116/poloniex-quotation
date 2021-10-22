import * as React from 'react'
import { useHistory } from 'react-router-dom'

export type ILinkButton = {
	route: string;
	text: string;
}

const LinkButton: React.FC<ILinkButton> = ({ route, text }) => {
	const history = useHistory()

	const handleClickOnTab = (tabName: string) => history.push(`/${tabName}`)

	return (
		<button type="button" onClick={() => handleClickOnTab(route)}>
			{text}
		</button>
	)
}

export default React.memo(LinkButton)