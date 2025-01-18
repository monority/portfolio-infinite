import React from 'react'
import Accordion from '../components/Accordion'
import GitHubCommitCounter from '../components/GitHubCommitCounter';
import AgeCount from '../components/AgeCount';
import TimeDifference from '../components/DateCalculator';

const Details = () => {
	const targetDate = "2023-02-18"; 
	return (
		<>	<section id="details" className='layout_container'>
			<div className="global_container">
				<div className="container">
					<div className="wrapper_title">
						<svg fill="currentColor" width="3rem" height="3rem" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path d="M18,24H78a6,6,0,0,0,0-12H18a6,6,0,0,0,0,12Z" />
								<path d="M78,42H18a6,6,0,0,0,0,12H78a6,6,0,0,0,0-12Z" />
								<path d="M78,72H18a6,6,0,0,0,0,12H78a6,6,0,0,0,0-12Z" />
							</g>
						</svg>
						<h1>About</h1>
					</div>

					<div className="container_content">
						<div className="wrapper_content">
							<div className="wrapper_text">
								<p>I'm a junior web developer with a passion for coding and crafting visually appealing projects. I strive to continuously improve my foundational knowledge in programming, particularly with React and NodeJS. My ultimate goal is to work independently, building websites from the ground up. I'm committed to lifelong learning, both in tech and other areas, and I always aim for perfection in every detail of my work.

								</p>
							</div>

							<div className="wrapper_box">
								<div className="element_box">
									<p className='text_color03'>Age</p>
									<AgeCount/>
								</div>
								<div className="element_box">
									<p className='text_color03'>Years of dev</p>
									<p>  <TimeDifference startDate={targetDate} /></p>
								</div>
							</div>
							<div className="wrapper_box">
								<div className="element_box">
									<p className='text_color03'>Amazing cat</p>
									<p>1</p>
								</div>
								<div className="element_box">
		
									<GitHubCommitCounter/>
								</div>
							</div>

						</div>
						<div className="wrapper_img">
							<img src="/monority.svg" alt="" />
						</div>
					</div>

				</div>
			</div>
		</section ></>
	)
}

export default Details