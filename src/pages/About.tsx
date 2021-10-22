import * as React from 'react'
import LinkButton from '../components/LinkButton'

export type IAbout = {

}

const About: React.FC<IAbout> = () => {
	return (
		<div>
			<h1>О приложении</h1>
			<LinkButton text='Growing quotes' route='quotationGrowing' />
			<LinkButton text='Falling quotes' route='quotationFalling' />
		</div>
	)
}

export default React.memo(About)