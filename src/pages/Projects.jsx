import React from 'react'
import { ReactSVG, SassSVG, WebSVG, NodeJsSVG, PHPSVG, MongoSVG, AntSVG, DetailsSVG, FirebaseSVG, SQLSVG } from '../components/svg/Svg.Jsx'
import { RepoSVG } from '../components/svg/Svg.Jsx'
const Projects = () => {
	return (
		<>
			<section id="projects" className='layout_container'>
				<div className="global_container">
					<div className="container">
						<div className="wrapper_title">
							<svg fill="currentColor" width="3rem" height="3rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

								<g>

									<path d="M2,9H9V2H2Zm9-7V9h7V2ZM2,18H9V11H2Zm9,0h7V11H11Z" />

								</g>

							</svg>
							<h1>Projects</h1>
						</div>
						<div className="project_container">
							<div className="project-wrapper">
								<div className="element_title">
									<h1>Cesar lezard</h1>
								</div>
								<div className="element_subtitle">
									<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
									<p>Javascript</p>
								</div>
								<div className="element_content">
									<p>
										Website for a musician / artist showing off his differents creations and music.
									</p>
								</div>
								<div className="element_row">
									<div className="element_svg">
										<div className="element_stack">
											<ReactSVG />

										</div>
										<div className="element_stack">

											<SassSVG />

										</div>
									</div>

									<div className="element_link">
										<div className="element_glob_web" onClick={() => window.open("https://cesarlezard.com/", "_blank")}>
											<span>
												<WebSVG />
											</span>
											<p className="hover_text" >Web</p>
										</div>
										<div className="element_glob" onClick={() => window.open("https://cesarlezard.com/", "_blank")}>
											<DetailsSVG />
											<p className="hover_text" >Details</p>
										</div>
									</div>

								</div>
							</div>
							<div className="project-wrapper">
								<div className="element_title">
									<h1>Telefoot</h1>
								</div>
								<div className="element_subtitle">
									<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
									<p>PHP / SQL</p>
								</div>
								<div className="element_content">
									<p>
										Reproduction of the telefoot application. Management of user registration, login and password recovery with a database.
									</p>
								</div>
								<div className="element_row">
									<div className="element_svg">
										<div className="element_stack">

											<SQLSVG />
										</div>
										<div className="element_stack">

											<SassSVG />

										</div>
										<div className="element_stack">

											<PHPSVG />

										</div>
									</div>
									<div className="element_link">
										<div className="element_glob" onClick={() => window.open("https://github.com/monority/dev-telefoot-mvc", "_blank")}>
											<RepoSVG />
											<p className="hover_text" >Repository</p>
										</div>

									</div>
								</div>
							</div>
							<div className="project-wrapper">
								<div className="element_title">
									<h1>Chava</h1>
								</div>
								<div className="element_subtitle">
									<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
									<p>Javascript</p>
								</div>
								<div className="element_content">
									<p>
										M2i end of training project developed with a colleague in 1 month. Database hosted on MongoDB and front-end developed in React/Vite.
									</p>
								</div>
								<div className="element_row">
									<div className="element_svg">
										<div className="element_stack">

											<ReactSVG />

										</div>
										<div className="element_stack">

											<SassSVG />


										</div>
										<div className="element_stack">
											<AntSVG />
										</div>
										<div className="element_stack">
										<MongoSVG />
										</div>
										<div className="element_stack">
										<NodeJsSVG />
										</div>
									</div>
									<div className="element_link">
										<div className="element_glob" onClick={() => window.open("https://github.com/monority/client-chava", "_blank")}>
										<RepoSVG />
											<p className="hover_text">Repository</p>
										</div>

									</div>
								</div>
							</div>
							<div className="project-wrapper">
								<div className="element_title">
									<h1>Todo App FullStack</h1>
								</div>
								<div className="element_subtitle">
									<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
									<p>Javascript</p>
								</div>
								<div className="element_content">
									<p>
										Application to create todo list with user login and registration. Managing back-end with firebase.
									</p>
								</div>
								<div className="element_row">
									<div className="element_svg">
										<div className="element_stack">
										<ReactSVG />
										</div>
										<div className="element_stack">
										<FirebaseSVG />
										</div>
										<div className="element_stack">

										<SassSVG />

										</div>
									</div>
									<div className="element_link">
										<div className="element_glob" onClick={() => window.open("https://tdappnext.web.app/", "_blank")}>
										<RepoSVG />
											<p className="hover_text" >Incoming</p>
										</div>

									</div>
								</div>
							</div>
							<div className="project-wrapper">
								<div className="element_title">
									<h1>BG Game</h1>
								</div>
								<div className="element_subtitle">
									<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
									<p>Php</p>
								</div>
								<div className="element_content">
									<p>
										Dual game in a website based on baldur's gate lore.
									</p>
								</div>
								<div className="element_row">
									<div className="element_svg">
										<div className="element_stack">

										<PHPSVG />

										</div>
										<div className="element_stack">
										<SassSVG />
										</div>

									</div>
									<div className="element_link">
										<div className="element_glob" onClick={() => window.open("https://github.com/monority/dev-baldursgate-game", "_blank")}>
										<RepoSVG />
											<p className="hover_text">Repository</p>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	)
}

export default Projects