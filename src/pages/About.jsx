import React from 'react'

const About = () => {
	return (
		<>
			<section id="about" className='layout_container'>
				<div className="global_container">
					<div className="container">
						<div className="container_row">
							<div className="wrapper">
								<div className="figure_image">
									<img src="/github.png" alt="" />
									<div className="figcaption">
										<p>Github</p>
									</div>
								</div>
							</div>
							<div className="wrapper">
								<div className="figure_image">
									<img src="pure.jpg" alt="" />
									<div className="figcaption">
										<p>Level-Design</p>
									</div>
								</div>
							</div>
						</div>
						<div className="container_half">
							<div className="wrapper">
								<div className="element">
									<p>Network</p>
								</div>
								<div className="element">
									<p>Network</p>
								</div>
								<div className="element">
									<p>Network</p>
								</div>
								<div className="element">
									<p>Network</p>

								</div>
							</div>
						</div>
					</div>

				</div>
			</section >
		</>
	)
}

export default About