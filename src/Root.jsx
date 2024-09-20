import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Page
import Home from './pages/Home'

// Components

import App from './App'
import Footer from './components/Footer'
import Header from './components/global/Header'
import ProjectDetails from './pages/Project/ProjectDetails'
const Root = () => {
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route path="/project/:id" element={<ProjectDetails />} />
			</Routes>
			<Footer></Footer>
		</BrowserRouter>
	)
}

export default Root;

