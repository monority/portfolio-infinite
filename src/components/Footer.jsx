import React from 'react'

const Footer = () => {
	return (
		<>
			<footer id="footer">
				<div className="global_container">
					<div className="container">
						<div className="wrapper">
							<p onClick={() => window.open("https://fr.linkedin.com/in/ronanchenu/")}>Copyright © 2024 Ronan Chenu - All Rights Reserved</p>
							<img src="monority.svg" alt="" /> 
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}

export default Footer