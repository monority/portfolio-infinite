import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Page
import Home from './pages/Home'

// Components

import App from './App'
import Footer from './components/Footer'
import Header from './components/global/Header'
const Root = () => {
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route exact path="/" element={<App />} />
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	)
}

export default Root;

