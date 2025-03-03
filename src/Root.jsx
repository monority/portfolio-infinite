import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Page

// Components

import App from './App'
import Footer from './components/Footer'
import Header from './components/global/Header'
import Error from './pages/Error'
const Root = () => {
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	)
}

export default Root;

