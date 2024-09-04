import React from 'react'
import TimePicker from '../components/TimePicker'
const Home = () => {

	return (
		<>
			<section id="home" className='layout-container'>
				<div className="global_container">
					<div className="container">

						<div className="container-text">

							<div className="element">
								<h1><span className='gradient-text'>Ronan Chenu</span> </h1>

							</div>
							<div className="element-row">
								<div className="tech-wrapper">
									<span className='react_span tech_span'><svg className='svg-color' width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="currentColor" />
										<path fillRule="evenodd" clipRule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="currentColor" />
									</svg><p>React</p></span>
								</div>


								<div className="tech-wrapper">
									<span className='nodejs_span tech_span'><svg className='svg-color' width="24" height="24" viewBox="-13 0 282 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
										<g fill="currentColor">
											<path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
											<path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
										</g>

									</svg><p>NodeJS</p></span>
								</div>
								<div className="tech-wrapper">
									<span className='sass_span tech_span'><svg className='svg-color' width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.11,17.572a5.8,5.8,0,0,0-2.537.588,5.345,5.345,0,0,1-.568-1.314,3.53,3.53,0,0,1-.051-1.1,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256a6.171,6.171,0,0,0-.235.834,19.686,19.686,0,0,1-1.713,3.294,3.186,3.186,0,0,1-.44-2.066,9.811,9.811,0,0,1,.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256-.118.5-.235.834-1.483,3.386-1.841,4.173c-.184.4-.343.726-.455.946h0a.233.233,0,0,1-.02.041c-.1.189-.153.292-.153.292v.005c-.077.138-.159.266-.2.266a1.711,1.711,0,0,1,.01-.869c.2-1.059.69-2.705.685-2.762,0-.031.092-.317-.317-.465a.508.508,0,0,0-.578.1c-.036,0-.061.087-.061.087s.445-1.851-.849-1.851a3.855,3.855,0,0,0-2.475,1.683c-.348.189-1.089.593-1.882,1.028-.3.169-.614.338-.905.5-.02-.02-.041-.046-.061-.066C6.87,17.6,3.975,16.416,4.1,14.171c.046-.818.327-2.966,5.559-5.575,4.306-2.122,7.733-1.534,8.326-.23.849,1.862-1.836,5.319-6.285,5.82a3.351,3.351,0,0,1-2.813-.711c-.235-.256-.271-.271-.358-.22-.143.077-.051.307,0,.44a2.626,2.626,0,0,0,1.606,1.263,8.55,8.55,0,0,0,5.217-.517c2.7-1.043,4.8-3.943,4.184-6.372-.619-2.465-4.71-3.278-8.582-1.9A19.5,19.5,0,0,0,4.359,9.952c-2.133,1.995-2.47,3.728-2.332,4.455.5,2.578,4.051,4.255,5.472,5.5-.072.041-.138.077-.194.107-.711.353-3.421,1.77-4.1,3.268-.767,1.7.123,2.915.711,3.079a4.374,4.374,0,0,0,4.71-1.908A4.725,4.725,0,0,0,9.049,20.1a.107.107,0,0,0-.02-.031l.557-.327c.363-.215.721-.414,1.028-.578a6.74,6.74,0,0,0-.363,1.862,3.886,3.886,0,0,0,.834,2.7.921.921,0,0,0,.675.22c.6,0,.875-.5,1.176-1.094.368-.726.7-1.57.7-1.57s-.414,2.281.711,2.281c.409,0,.823-.532,1.008-.8v.005s.01-.015.031-.051l.066-.107v-.01c.164-.286.532-.936,1.079-2.015.706-1.391,1.386-3.13,1.386-3.13a8.888,8.888,0,0,0,.271,1.13,10.643,10.643,0,0,0,.583,1.309c-.164.23-.266.358-.266.358l.005.005c-.133.174-.276.363-.435.547a16.3,16.3,0,0,0-1.314,1.647.447.447,0,0,0,.123.6,1.116,1.116,0,0,0,.685.113,3.147,3.147,0,0,0,1.028-.235,3.45,3.45,0,0,0,.885-.465,1.98,1.98,0,0,0,.849-1.744,3.521,3.521,0,0,0-.322-1.233c.051-.072.1-.143.148-.215a23.428,23.428,0,0,0,1.534-2.649,8.888,8.888,0,0,0,.271,1.13,7.57,7.57,0,0,0,.5,1.125A4.861,4.861,0,0,0,20.965,20.8c-.322.931-.072,1.35.4,1.447a1.425,1.425,0,0,0,.747-.153,3.4,3.4,0,0,0,.946-.486,2.126,2.126,0,0,0,1.043-1.729,3.268,3.268,0,0,0-.235-1.023,5.356,5.356,0,0,1,2.716-.312c2.434.286,2.915,1.805,2.823,2.445a1.618,1.618,0,0,1-.772,1.094c-.169.107-.225.143-.21.22.02.113.1.107.245.087A1.9,1.9,0,0,0,30,20.7c.077-1.5-1.355-3.145-3.887-3.13ZM7.33,23.9c-.808.88-1.933,1.212-2.419.931-.522-.3-.317-1.6.675-2.532a12.884,12.884,0,0,1,1.9-1.417c.118-.072.292-.174.5-.3l.056-.031h0l.123-.077A3.493,3.493,0,0,1,7.33,23.9Zm5.881-4c-.281.685-.869,2.44-1.227,2.342-.307-.082-.5-1.412-.061-2.726a6.193,6.193,0,0,1,.956-1.754c.44-.491.926-.655,1.043-.455a9.062,9.062,0,0,1-.711,2.593Zm4.853,2.322c-.118.061-.23.1-.281.072-.036-.02.051-.1.051-.1s.609-.655.849-.951c.138-.174.3-.378.476-.609V20.7c0,.782-.757,1.309-1.094,1.524Zm3.744-.854c-.087-.061-.072-.266.22-.905a3.408,3.408,0,0,1,.834-1.074,1.448,1.448,0,0,1,.082.471,1.547,1.547,0,0,1-1.135,1.509Z" fill='currentColor' /></svg> <p>Sass</p> </span>

								</div>
								<div className="tech-wrapper">
									<span className='sass_span tech_span'><svg fill="currentColor" className='svg-color' width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">

										<path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z"></path>
									</svg> <p>MongoDB</p> </span>

								</div>
							</div>
							<div className="element">
								<p>30y junior <strong>web developer</strong>. <br />Continuously refining my skills, I thrive on creating clean, responsive designs and solving complex problems.<br /> Let's build something together.</p>
							</div>

							<div className="element-row">

								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#7599e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#7599e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<p>Lille, France</p>
								<TimePicker></TimePicker>
							</div>
							<div className="element-row">
								<div className="svg-wrap" onClick={() => window.open('https://fr.linkedin.com/in/ronanchenu', '_blank')}>
									<svg className='svg-link' width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" /></svg>
									<p>Linkedin</p>
								</div>
								<div className="svg-wrap">
									<svg className='svg-link' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => window.open('https://www.github.com/monority', '_blank')}>
										<rect width="24" height="24" fill="none" />
										<path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" fill='currentColor' />
									</svg>
									<p>Github</p>
								</div>
								<div className="svg-wrap">
									<svg className='svg-link' width="24" height="24" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">

										<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<g id="mail-filled-white" fill="currentColor" transform="translate(42.686667, 85.339333)">
												<path d="M3.55271368e-14,28.7 L213.333914,220.70134 L426.667,28.701 L426.667248,341.333608 L0.00058094128,341.333608 L3.55271368e-14,28.7 Z M394.776,1.42108547e-14 L213.333914,163.285608 L31.89,1.42108547e-14 L394.776,1.42108547e-14 Z" id="Combined-Shape">

												</path>
											</g>
										</g>
									</svg>
									<p>Contact</p>
								</div>
							</div>
						</div>
						<div className="container-current">
							<div className="wrapper">
								<div className="element-title">
									<div className="title">
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
								<div className="element-bottom">
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