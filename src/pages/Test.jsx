import React from 'react'

const Test = () => {
	return (
		<>

			<div id="hovereffect">
		
				<section className="gallery">
					<div className="container">
						<div className="grid">
							<div className="column-xs-12 column-md-4">
								<figure className="img-container">
									<img src="https://source.unsplash.com/8b1cWDyvT7Y" alt="Smart Watch" />
									<figcaption className="img-content">
										<h2 className="title">Smart Watch</h2>
										<h3 className="category">Showcase</h3>
									</figcaption>
									<span className="img-content-hover">
										<h2 className="title">Smart Watch</h2>
										<h3 className="category">Showcase</h3>
									</span>
								</figure>
							</div>

							<div className="column-xs-12 column-md-4">
								<figure className="img-container">
									<img src="https://source.unsplash.com/5VXH4RG88gc" alt="Camera Film" />
									<figcaption className="img-content">
										<h2 className="title">Camera Film</h2>
										<h3 className="category">Showcase</h3>
									</figcaption>
									<span className="img-content-hover">
										<h2 className="title">Camera Film</h2>
										<h3 className="category">Showcase</h3>
									</span>
								</figure>
							</div>

							<div className="column-xs-12 column-md-4">
								<figure className="img-container">
									<img src="https://source.unsplash.com/XtUd5SiX464" alt="Coffee" />
									<figcaption className="img-content">
										<h2 className="title">Coffee</h2>
										<h3 className="category">Showcase</h3>
									</figcaption>
									<span className="img-content-hover">
										<h2 className="title">Coffee</h2>
										<h3 className="category">Showcase</h3>
									</span>
								</figure>
							</div>

							<div className="column-xs-12 column-md-6">
								<figure className="img-container">
									<img src="https://source.unsplash.com/JYGnB9gTCls" alt="Phone" />
									<figcaption className="img-content">
										<h2 className="title">Phone</h2>
										<h3 className="category">Showcase</h3>
									</figcaption>
									<span className="img-content-hover">
										<h2 className="title">Phone</h2>
										<h3 className="category">Showcase</h3>
									</span>
								</figure>
							</div>

							<div className="column-xs-12 column-md-6">
								<figure className="img-container">
									<img src="https://source.unsplash.com/-RBuQ2PK_L8" alt="Keyboard" />
									<figcaption className="img-content">
										<h2 className="title">Keyboard</h2>
										<h3 className="category">Showcase</h3>
									</figcaption>
									<span className="img-content-hover">
										<h2 className="title">Keyboard</h2>
										<h3 className="category">Showcase</h3>
									</span>
								</figure>
							</div>

							<div className="column-xs-12">
								<figure className="img-container">
									<img src="https://source.unsplash.com/P44RIGl9V54" alt="Wrist Watch" />
									<figcaption className="img-content">
										<h2 className="title">Wrist Watch</h2>
										<h3 className="category">Showcase</h3>
									</figcaption>
									<span className="img-content-hover">
										<h2 className="title">Wrist Watch</h2>
										<h3 className="category">Showcase</h3>
									</span>
								</figure>
							</div>
						</div>
					</div>
				</section>

				<footer>
					<div className="container">
						<div className="grid">
							<div className="column-xs-12">
								<ul className="social">
									<li><a href="https://twitter.com/kato_katherine" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter"></span></a></li>
									<li><a href="https://codepen.io/kathykato" target="_blank" rel="noopener noreferrer"><span className="fab fa-codepen"></span></a></li>
									<li><a href="https://github.com/kathykato" target="_blank" rel="noopener noreferrer"><span className="fab fa-github"></span></a></li>
								</ul>
								<p className="copyright">&copy; Copyright 2018 Katherine Kato</p>
							</div>
						</div>
					</div>
				</footer>
			</div>

		</>
	)
}

export default Test