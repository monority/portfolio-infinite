import React from 'react'
import TimePicker from '../components/TimePicker'
import TypingEffect from '../components/TypingEffect'
import AgeCount from '../components/AgeCount'

const Home = () => {

	return (
		<>
			<section id="home" className='layout_container'>
				<div className="global_container">
					<div className="container">
						<div className="container_text">
							<div className="wrapper">
								<h1>Ronan Chenu</h1>
								<TypingEffect></TypingEffect>
							</div>
							<div className="wrapper_row_simple">

								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#7599e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#7599e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p>Lille, France</p>
								<TimePicker></TimePicker>
							</div>
						</div>
						<div className="container_current">
							<div className="wrapper">
								<div className="wrapper_row">
									<div className="element">
										<h3>App.jsx</h3>
									</div>
									<div className="wrapper_row">
										<div className="element_svg">
											<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="8" cy="8" r="8" fill="#f2863e" />
											</svg>
										</div>
										<div className="element_svg">
											<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="8" cy="8" r="8" fill="#e82929" />
											</svg>
										</div>
									</div>

								</div>
								<div className="element">
									<div className="element_line">
										<div className="row_title">
											<span>✌</span>
											<h4>In build</h4>
										</div>
										<div className="element_text">
											<p>E-shop website</p>
										</div>

									</div>
									<hr />
									<div className="element_line">
										<div className="row_title">
											<span>🎨</span>
											<h4>Speciality</h4></div>
										<div className="element_text">
											<p>Front-End</p>
										</div>
									</div>
									<hr />
									<div className="element_line">
										<div className="row_title">
											<span>🎴</span>
											<h4>Principal Hobby</h4></div>
										<div className="element_text">
											<p>Sport</p>
										</div>
									</div>
									<hr />
								</div>
								<div className="wrapper_row">
									<div className="element_svg">
										<button className='btn btn_design01' onClick={() => window.open("https://patreon.com/monority")}>
											<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 256 256"><path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path></svg>
											Support</button>
									</div>
								</div>
							</div>

						</div>
					</div >
				</div >
			</section >
		</>
	)
}

export default Home