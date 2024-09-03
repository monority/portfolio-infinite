import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Page
import Home from './pages/Home'

// Components
import Header from './components/Header'
import App from './App'
const Root = () => {
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route exact path="/" element={<App />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Root;

