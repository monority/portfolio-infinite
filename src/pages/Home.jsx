import React from 'react'
import TimePicker from '../components/TimePicker'
import TypingEffect from '../components/TypingEffect'
const Home = () => {

	return (
		<>
			<section id="home" className='layout-container'>
				<div className="global_container">
					<div className="container">
						<div className="container_text">
						<div className="wrapper">
							<h1>Ronan Chenu</h1>
							<TypingEffect></TypingEffect>
						</div>
						</div>
						<div className="container_current">
							<div className="wrapper">
								<div className="element">
									<div className="element-title">
										<h3>App.jsx</h3>
									</div>
									<div className="element-svg">
										<div className="svg-wrapper">
											<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="8" cy="8" r="8" fill="#4c4c4c" />
											</svg>
										</div>
										<div className="svg-wrapper">
											<svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="8" cy="8" r="8" fill="#4c4c4c" />
											</svg>
										</div>
									</div>

								</div>
								<div className="element">
									<div className="element-line">
										<div className="row-title">
											<span>💻</span>
											<h4>nike.com</h4></div>
										<div className="element-text">
											<p>Reproducting nike website</p>
										</div>
										<div className="element-sub"><p>03/09/24 - update</p>
										</div>
									</div>
									<hr />
									<div className="element-line">
										<div className="row-title">
											<span>🎴</span>
											<h4>Paintings</h4></div>
										<div className="element-text">
											<p>Colors and inspirations</p>
										</div>
									</div>
									<hr />
									<div className="element-line">
										<div className="row-title">
											<span>🎴</span>
											<h4>Level-design</h4></div>
										<div className="element-text">
											<p>We're making maps</p>
										</div>
									</div>
									<hr />
								</div>
								<div className="element">
									<div className="element-svg">
										<button className='btn btn-basic'><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 256 256"><path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path></svg>Support</button>
									</div>
									<div className="element-svg">
										<button className='btn btn-basic'><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 256 256"><path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path></svg>Resume</button>
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