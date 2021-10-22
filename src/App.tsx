import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import PageWithTransition from './hocs/PageWithTransition'
import About from './pages/About'
import Qutation from './pages/Quotation'

const App = (): JSX.Element => {
	return (
		<Router basename='/'>
			<div className="app">
				<Switch>
					<Route exact path='/' component={PageWithTransition(About)} />
					<Route exact path='/about' component={PageWithTransition(About)} />
					<Route path='/quotationGrowing' component={PageWithTransition(() => <Qutation sourceName='Growing quotes' />)} />
					<Route path='/quotationFalling' component={PageWithTransition(() => <Qutation sourceName='Falling quotes' />)} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
