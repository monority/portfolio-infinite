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
												<circle cx="8" cy="8" r="8" fill="#4c4c4c" />
											</svg>
										</div>
										<div className="element_svg">
											<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="8" cy="8" r="8" fill="#4c4c4c" />
											</svg>
										</div>
									</div>

								</div>
								<div className="element">
									<div className="element_line">
										<div className="row_title">
											<span>✌</span>
											<h4>Ronan Chenu</h4></div>
										<div className="element_text">
											30 years, Lille
										</div>
									
									</div>
									<hr />
									<div className="element_line">
										<div className="row_title">
											<span>🎨</span>
											<h4>Passion</h4></div>
										<div className="element_text">
											<p>Colors and inspirations</p>
										</div>
									</div>
									<hr />
									<div className="element_line">
										<div className="row_title">
											<span>🎴</span>
											<h4>Level-design</h4></div>
										<div className="element_text">
											<p>We're making maps</p>
										</div>
									</div>
									<hr />
								</div>
								<div className="wrapper_row">
									<div className="element_svg">
										<button className='btn btn_design01'>
											<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 256 256"><path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path></svg>
											Support</button>
									</div>
									<div className="element_svg">
										<button className='btn btn-design02'>
											<svg height="2rem" width="2rem" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
												viewBox="0 0 512 512" xml:space="preserve">

												<g>
													<path class="st0" d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
		c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"/>
													<path class="st0" d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
		c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"/>
													<path class="st0" d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
		h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
		c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
		c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"/>
												</g>
											</svg>
											Resume</button>
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