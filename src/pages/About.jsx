import React, { useState } from 'react'
import CV from '/assets/CV.pdf'
const About = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		message: ''
	});
	const [status, setStatus] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};
	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleConfirm = () => {
		console.log(formData);
		closeModal();
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setStatus("sending");
		const formData = new FormData(e.target);
		const messageData = {
			to_name: "Ronan website",
			from_name: formData.get("name"),
			from_email: formData.get("email"),
			message: formData.get("message")
		};
		emailjs.send(
			import.meta.env.VITE_PUBLIC_SERVICE_ID,
			import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
			messageData,
			import.meta.env.VITE_PRIVATE_SEND_ID,
		)
			.then((result) => {
				setStatus("sent");
			})
			.catch((error) => {
				setStatus("error");
			});
	};
	return (
		<>
			<section id="about" className='layout_container'>
				<div className="global_container">
					<div className="layout_wrapper">
						<div className="container">
							<div className="wrapper">
								<div className="figure_image" onClick={() => window.open("https://github.com/monority")}>
									<img src="/github.png" alt="" className='img_full ' />
									<div className="figcaption">
										<svg width="3rem" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg_position'> 
											<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9992 5.95846C21.0087 6.565 20.9333 7.32649 20.8658 7.8807C20.8395 8.09686 20.8037 8.27676 20.7653 8.42453C21.6227 10.01 22 11.9174 22 14C22 16.4684 20.8127 18.501 18.9638 19.8871C17.1319 21.2605 14.6606 22 12 22C9.33939 22 6.86809 21.2605 5.0362 19.8871C3.18727 18.501 2 16.4684 2 14C2 11.9174 2.37732 10.01 3.23472 8.42452C3.19631 8.27676 3.16055 8.09685 3.13422 7.8807C3.06673 7.32649 2.99133 6.565 3.00081 5.95846C3.01149 5.27506 3.10082 4.5917 3.19988 3.91379C3.24569 3.60028 3.31843 3.30547 3.65883 3.11917C4.00655 2.92886 4.37274 2.99981 4.73398 3.1021C5.95247 3.44713 7.09487 3.93108 8.16803 4.51287C9.2995 4.17287 10.5783 4 12 4C13.4217 4 14.7005 4.17287 15.832 4.51287C16.9051 3.93108 18.0475 3.44713 19.266 3.1021C19.6273 2.99981 19.9935 2.92886 20.3412 3.11917C20.6816 3.30547 20.7543 3.60028 20.8001 3.91379C20.8992 4.5917 20.9885 5.27506 20.9992 5.95846ZM20 14C20 12.3128 19.6122 10 17.5 10C16.5478 10 15.6474 10.2502 14.7474 10.5004C13.8482 10.7502 12.9495 11 12 11C11.0505 11 10.1518 10.7502 9.25263 10.5004C8.35261 10.2502 7.45216 10 6.5 10C4.39379 10 4 12.3197 4 14C4 15.7636 4.82745 17.231 6.23588 18.2869C7.66135 19.3556 9.69005 20 12 20C14.3099 20 16.3386 19.3555 17.7641 18.2869C19.1726 17.231 20 15.7636 20 14ZM10 14.5C10 15.8807 9.32843 17 8.5 17C7.67157 17 7 15.8807 7 14.5C7 13.1193 7.67157 12 8.5 12C9.32843 12 10 13.1193 10 14.5ZM15.5 17C16.3284 17 17 15.8807 17 14.5C17 13.1193 16.3284 12 15.5 12C14.6716 12 14 13.1193 14 14.5C14 15.8807 14.6716 17 15.5 17Z" fill="#ffffff" />
										</svg>
										<p className='text_align_bottomleft'>Github repositories</p>
									</div>
							
								</div>
							</div>
							<div className="wrapper">
								<div className="figure_image" onClick={() => window.open("https://gamebanana.com/members/1448278")}>
									<img src="pure.jpg" alt="" className='img_full' />
									<div className="figcaption">
										<svg version="1.1" id="Calque_3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="3rem" height="3rem" className='svg_position_right'
											viewBox="0 0 512 512" xml:space="preserve">
											<polygon points="433.7,271.5 345.1,162.1 345.1,162.1 305.3,113 164.5,113 204.2,162.1 282,162.1 370.6,271.6 370.5,271.6 
	321.6,331.9 181.2,331.9 230.1,271.5 230.1,271.5 258.2,236.9 194.9,236.9 106.4,346.3 106.4,346.3 78.3,381 140.5,381 140.5,381 
	336.5,381 336.5,381 345.1,381 "/>
										</svg>

										<p className='text_align_bottomright'>Level Design</p>
									</div>
							
								</div>
							</div>
						</div>
						<div className="container">
							<div className="container_four">
								<div className="wrapper_box">
									<div className="element_box">
										<div className="box bg_color04" onClick={openModal}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
											<p>Mail</p>
										</div>

										{isModalOpen && (
											<div className="modal" onClick={handleBackdropClick}>
												<form action="post" onSubmit={sendEmail}>
													<h2>Contact</h2>
													<div className="form-container">
														<div className="form-group">
															<input type="text" name="email" id="email" required className='input-base'
															/>
															<label htmlFor="email">Email</label>
														</div>
														<div className="form-group">
															<input type="name" name="name" id="name" required className='input-base'
															/>
															<label htmlFor="name">Nom/Entreprise</label>
														</div>
														<div className="form-group">
															<textarea name="message" rows="5" id="message" className='input-base'></textarea>
															<label htmlFor="message" className='label-message'>Message</label>

														</div>
													</div>
													<div className="foot-wrap">
														<div className="button-wrap">
															<input type="submit" value="Send" className='btn btn_validation' />
														</div>
														<div className="button-wrap">
															<button onClick={closeModal} className='btn btn_cancel'>Cancel</button>
														</div>

													</div>
												</form>
											</div>
										)}

										<div className="box bg_color05 text_color03" onClick={() => window.open(CV)}>
											<svg height="2rem" width="2rem" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"
												viewBox="0 0 512 512" xml:space="preserve">
												=
												<g>
													<path className="st0" d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
		c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"/>
													<path className="st0" d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
		c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"/>
													<path className="st0" d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
		h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
		c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
		c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"/>
												</g>
											</svg>
											<p className='text_color03'>Resume</p>
										</div>
										<div className="box bg_color06" onClick={() => window.open("https://fr.linkedin.com/in/ronanchenu/")}>
											<svg fill="currentColor" height="2rem" width="2rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
												viewBox="-143 145 512 512" xml:space="preserve">
												<path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
	c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
	c35.5,0,63.3,23,63.3,72.4V508.1z"/>
											</svg>
											<p>Linkedin</p>
										</div>

									</div>
								</div>
								<div className="wrapper_box">
									<div className="element_box">
										<div className="element_content">

											<h1>Under development</h1>
											<div className="caption">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.08 189.63" width="15rem" height="15rem">
													<defs>
														<linearGradient id="basic-gradient" x1="0" y1="0" x2="1" y2="1">
															<stop offset="0%" stopColor="#3182ce" />
															<stop offset="14.29%" stopColor="#348fc5" />
															<stop offset="28.57%" stopColor="#389ac2" />
															<stop offset="42.86%" stopColor="#3ca5c1" />
															<stop offset="57.14%" stopColor="#41b0c2" />
															<stop offset="71.43%" stopColor="#45bbc3" />
															<stop offset="100%" stopColor="#4fd1c5" />
														</linearGradient>
													</defs>
													<g id="Calque_2" data-name="Calque 2">
														<g id="Calque_1-2" data-name="Calque 1">
															<path d="M57.62,96.8a161.29,161.29,0,0,0-17.1-.51,140.6,140.6,0,0,0-22.59,4.28c-2.72.75-12.69,5.06-15,6.59L.51,108.82v22.25c0,12.62-.1,18.55.51,21S3,153.41,5.8,152a34.29,34.29,0,0,1,4.26-1.92c.8-.33,2.09-.85,2.9-1.22,24.06-8.32,52.89-7.17,75.63,4.29A5.85,5.85,0,0,0,91,154c.55,0,.84-.32,1-3.34.28-7-.08-31.83-.14-42.31C82.31,101.72,69,98.46,57.62,96.8Z" fill="url(#basic-gradient)" />
															<path d="M122.72,78.22a163,163,0,0,0,9.71-14.09,141.19,141.19,0,0,0,8.65-21.3c.85-2.69,2.64-13.4,2.6-16.15,0-.73-.05-2.22-.07-3L124.92,11.65C114.32,4.8,109.39,1.5,107,.7s-2.2.89-2.58,4a37,37,0,0,1-.7,4.62c-.16.85-.43,2.22-.56,3.1-6.07,24.72-22.66,48.31-44.63,61.2a5.75,5.75,0,0,0-2,1.56c-.29.46-.18.88,2.27,2.63,5.74,4,26.79,17.2,35.62,22.84C105.19,96.28,115.15,86.88,122.72,78.22Z" fill="url(#basic-gradient)" />
															<path d="M114.74,145.47a162.94,162.94,0,0,0,8.05,15.1A142.33,142.33,0,0,0,137.73,178c2,2,10.7,8.5,13.16,9.72l2.66,1.3L172.86,178c10.95-6.27,16.15-9.14,17.95-10.88s.22-2.35-2.39-4.13a36.84,36.84,0,0,1-3.78-2.75c-.69-.53-1.77-1.39-2.49-1.91C163,141.59,149.64,116,148.28,90.57a5.68,5.68,0,0,0-.46-2.48c-.28-.48-.7-.57-3.38.81-6.22,3.24-27.58,15.89-36.65,21.14C106.75,121.6,110.52,134.77,114.74,145.47Z" fill="url(#basic-gradient)" />
														</g>
													</g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="container_sub">

								<div className="element">
									<div className="figure_image" onClick={() => window.open("https://iej-nouvelles-images.itch.io/rezan")}>
										<img src="Rezan.jpg" className="img_full" alt="" />
										<div className="figcaption">
											<p>Rezan Game</p>
										</div>
									</div>

									<div className="figure_image " onClick={() => window.open("https://morganiste.itch.io/grallaxy")}>
										<img src="Grallaxy.jpg" className="img_full " alt="" />
										<div className="figcaption">
											<p>Grallaxy</p>
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

export default About