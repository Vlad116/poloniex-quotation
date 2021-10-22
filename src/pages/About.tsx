import * as React from 'react'

export type IAbout = {

}

const About: React.FC<IAbout> = () => {
	return (
		<div>
			<h1>О приложении</h1>
		</div>
	)
}

export default React.memo(About)