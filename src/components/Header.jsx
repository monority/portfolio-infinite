import React, { useEffect, useState } from 'react'
import DisplayMode from './DisplayMode'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate();
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState(location.pathname);
    const [active, setActive] = useState(true);


	const navigation = (route) => {
        navigate(route, { replace: true });
        setActiveRoute(route); 
    }

	const checkLocation = location.pathname === "/showcase";
	useEffect(() => {
		const headerChange = () => {
			setActive(window.scrollY < 1);
		};

		window.addEventListener("scroll", headerChange);

		return () => {
			window.removeEventListener("scroll", headerChange);
		};
	}, []);
	return (
		<>
			<header id="header" className={` ${checkLocation ? 'bg-color04' : 'bg-transparent'} ${!active && 'scrolled'}`}>
				<div className="global-container height-large01 flex border-btm01">
					<div className="flex justify-spacebetween align-center h-100 w-100">
						<div className="wrapper flex align-center justify-center colgap-small01 pointer hover01" onClick={() => navigation("/")}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.08 189.63">
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
							<h2 className='text-mid01'>Ronan C.</h2>
						</div>
						<div className="wrapper flex align-center justify-center">
							<ul className='flex colgap-small02 align-center justify-center'>
								{/* <label htmlFor="input_search">Search</label>
							<li><input type="search" name="" id="" />
							</li> */}
							     <li className={`text-small03 pointer hover01 ${activeRoute === "/components/accordion"  && 'active'}`} onClick={() => navigation("/components/accordion")}>Showcase</li>
                                <li className={`text-small03 pointer hover01 ${activeRoute === "/work" && 'active'}`} onClick={() => navigation("/work")}>Work</li>
                                <li className={`text-small03 pointer hover01 ${activeRoute === "/hobby"  && 'active'}`} onClick={() => navigation("/hobby")}>Hobby</li>
                                <li className={`text-small03 pointer hover01 ${activeRoute === "/contact"  && 'active'}`} onClick={() => navigation("/contact")}>Contact</li>
                                <li className='pointer '><DisplayMode /></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header