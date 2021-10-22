import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-ts'
import './index.css'
import App from './App'

hot(module)(render(<App />, document.getElementById('root')))