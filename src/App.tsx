import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Qutation from './pages/Quotation'

const App = (): JSX.Element => {
	return (
		<Router basename="/about">
			<div className="app">
				<Switch>
					<Route exact path="/about" component={About} />
					<Route path='/quotationGrowing' component={() => <Qutation SourceName='Growing quotes' />} />
					<Route path='/quotationFalling' component={() => <Qutation SourceName='Falling quotes' />} />
					<Route exact path="/" component={About} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
