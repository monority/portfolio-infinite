import React from 'react'
import Accordion from '../components/Accordion'

const Details = () => {
	const items = [
		{
			title: 'Front-End development', content: (
				<><div className="wrapper_svg"> <svg width="2rem" height="2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE" />
					<path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE" />
				</svg> <p>React</p></div>
					<div className="wrapper_svg"> <svg width="2rem" height="2rem" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

						<defs>
							<linearGradient x1="62.1023273%" y1="0%" x2="108.19718%" y2="37.8635764%" id="linearGradient-1">
								<stop stop-color="#4285EB" offset="0%">

								</stop>
								<stop stop-color="#2EC7FF" offset="100%">

								</stop>
							</linearGradient>
							<linearGradient x1="69.644116%" y1="0%" x2="54.0428975%" y2="108.456714%" id="linearGradient-2">
								<stop stop-color="#29CDFF" offset="0%">

								</stop>
								<stop stop-color="#148EFF" offset="37.8600687%">

								</stop>
								<stop stop-color="#0A60FF" offset="100%">

								</stop>
							</linearGradient>
							<linearGradient x1="69.6908165%" y1="-12.9743587%" x2="16.7228981%" y2="117.391248%" id="linearGradient-3">
								<stop stop-color="#FA816E" offset="0%">

								</stop>
								<stop stop-color="#F74A5C" offset="41.472606%">

								</stop>
								<stop stop-color="#F51D2C" offset="100%">

								</stop>
							</linearGradient>
							<linearGradient x1="68.1279872%" y1="-35.6905737%" x2="30.4400914%" y2="114.942679%" id="linearGradient-4">
								<stop stop-color="#FA8E7D" offset="0%">

								</stop>
								<stop stop-color="#F74A5C" offset="51.2635191%">

								</stop>
								<stop stop-color="#F51D2C" offset="100%">

								</stop>
							</linearGradient>
						</defs>
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g fill-rule="nonzero">
								<path d="M116.850078,4.54548777 L4.52892893,116.774275 C-1.50964298,122.807881 -1.50964298,132.553174 4.52892893,138.586781 L116.850078,250.815568 C122.88865,256.849175 132.641964,256.849175 138.680536,250.815568 L185.77519,203.759641 C191.183172,198.356106 191.183172,189.595245 185.77519,184.191711 C180.367208,178.788175 171.599136,178.788175 166.191154,184.191711 L130.489075,219.864432 C128.986084,221.366187 126.704989,221.366187 125.201998,219.864432 L35.5055378,130.241729 C34.0025469,128.739974 34.0025469,126.460755 35.5055378,124.959 L125.201998,35.3362976 C126.704989,33.8345425 128.986084,33.8345425 130.489075,35.3362976 L166.191154,71.009019 C171.599136,76.4125539 180.367208,76.4125539 185.77519,71.009019 C191.183172,65.605484 191.183172,56.8446228 185.77519,51.4410879 L138.685727,4.39028013 C132.622361,-1.51275655 122.86548,-1.46496803 116.850078,4.54548777 Z" fill="url(#linearGradient-1)">

								</path>
								<path d="M116.850078,4.54548777 L4.52892893,116.774275 C-1.50964298,122.807881 -1.50964298,132.553174 4.52892893,138.586781 L116.850078,250.815568 C122.88865,256.849175 132.641964,256.849175 138.680536,250.815568 L185.77519,203.759641 C191.183172,198.356106 191.183172,189.595245 185.77519,184.191711 C180.367208,178.788175 171.599136,178.788175 166.191154,184.191711 L130.489075,219.864432 C128.986084,221.366187 126.704989,221.366187 125.201998,219.864432 L35.5055378,130.241729 C34.0025469,128.739974 34.0025469,126.460755 35.5055378,124.959 L125.201998,35.3362976 C128.944397,32.1100005 135.050525,25.5752137 144.017405,24.0468431 C150.68143,22.9109853 157.967021,25.4109881 165.874177,31.546852 C160.587747,26.2647619 151.52493,17.2125713 138.685727,4.39028013 C132.622361,-1.51275655 122.86548,-1.46496803 116.850078,4.54548777 Z" fill="url(#linearGradient-2)">

								</path>
								<path d="M196.646643,173.754365 C202.054625,179.157899 210.822696,179.157899 216.230677,173.754365 L250.970004,139.043604 C257.008576,133.009998 257.008576,123.264704 250.970711,117.231801 L215.928547,82.342615 C210.507763,76.945494 201.736908,76.953277 196.325725,82.3600099 C190.917743,87.7635449 190.917743,96.524406 196.325725,101.927941 L219.993396,125.57615 C221.496387,127.077905 221.496387,129.357124 219.993396,130.858879 L196.646643,154.186433 C191.23866,159.589968 191.23866,168.350829 196.646643,173.754365 Z" fill="url(#linearGradient-3)">

								</path>
								<ellipse fill="url(#linearGradient-4)" cx="128.326913" cy="128.241672" rx="30.3267102" ry="30.3017724">

								</ellipse>
							</g>
						</g>
					</svg> <p>Ant Design</p></div>
					<div className="wrapper_svg"> <svg width="2rem" height="2rem" viewBox="0 -32 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
						<g fill="#CD6799">
							<path d="M220.281239,110.513661 C211.374863,110.560291 203.634244,112.705282 197.152641,115.876138 C194.774499,111.166485 192.396357,106.969763 191.976685,103.892168 C191.510383,100.301639 190.95082,98.1100182 191.510383,93.8200364 C192.069945,89.5300546 194.587978,83.4214936 194.541348,82.9551913 C194.494718,82.4888889 193.981785,80.2972678 188.852459,80.2506375 C183.723133,80.2040073 179.29326,81.2298725 178.780328,82.5821494 C178.267395,83.9344262 177.28816,87.0120219 176.635337,90.182878 C175.749362,94.8459016 166.376685,111.492896 161.014208,120.21275 C159.288889,116.808743 157.796721,113.824408 157.47031,111.446266 C157.004007,107.855738 156.444444,105.664117 157.004007,101.374135 C157.56357,97.084153 160.081603,90.975592 160.034973,90.5092896 C159.988342,90.0429872 159.47541,87.8513661 154.346084,87.8047359 C149.216758,87.7581056 144.786885,88.7839709 144.273953,90.1362477 C143.76102,91.4885246 143.201457,94.6593807 142.128962,97.7369763 C141.056466,100.814572 128.606193,128.606193 125.342077,135.78725 C123.663388,139.471038 122.217851,142.408743 121.191985,144.413843 L121.191985,144.413843 C121.191985,144.413843 121.145355,144.553734 121.005464,144.786885 C120.11949,146.512204 119.606557,147.444809 119.606557,147.444809 C119.606557,147.444809 119.606557,147.444809 119.606557,147.491439 C118.907104,148.750455 118.16102,149.916211 117.787978,149.916211 C117.508197,149.916211 116.995264,146.558834 117.881239,141.989071 C119.746448,132.336612 124.176321,117.321676 124.12969,116.808743 C124.12969,116.528962 124.969035,113.917668 121.238616,112.565392 C117.601457,111.213115 116.295811,113.451366 115.969399,113.451366 C115.642987,113.451366 115.409836,114.24408 115.409836,114.24408 C115.409836,114.24408 119.466667,97.3639344 107.669217,97.3639344 C100.301639,97.3639344 90.1362477,105.430965 85.1001821,112.705282 C81.929326,114.430601 75.1679417,118.11439 67.940255,122.07796 C65.189071,123.616758 62.3446266,125.155556 59.6867031,126.601093 C59.5001821,126.414572 59.3136612,126.181421 59.1271403,125.9949 C44.8582878,110.746812 18.4655738,99.9752277 19.5846995,79.5045537 C20.0043716,72.0437158 22.5690346,52.4590164 70.2717668,28.6775956 C109.534426,9.32604736 140.776685,14.6885246 146.185792,26.579235 C153.926412,43.5526412 129.445537,75.0746812 88.8772313,79.6444444 C73.3959927,81.3697632 65.2823315,75.4010929 63.2306011,73.1628415 C61.0856102,70.8313297 60.7591985,70.691439 59.9664845,71.1577413 C58.6608379,71.8571949 59.5001821,73.9555556 59.9664845,75.1679417 C61.1788707,78.3387978 66.168306,83.9344262 74.6083789,86.6856102 C82.0692168,89.1103825 100.208379,90.4626594 122.17122,81.9759563 C146.745355,72.463388 165.957013,46.0240437 160.314754,23.8746812 C154.672495,1.3989071 117.368306,-6.01530055 82.0692168,6.52823315 C61.0856102,13.989071 38.3300546,25.7398907 21.9628415,41.0346084 C2.51803279,59.2204007 -0.559562842,75.028051 0.699453552,81.6495446 C5.22258652,105.151184 37.6306011,120.445902 50.5938069,131.777049 C49.9409836,132.150091 49.3347905,132.476503 48.8218579,132.756284 C42.340255,135.97377 17.6262295,148.890346 11.4710383,162.553005 C4.47650273,178.034244 12.5901639,189.13224 17.9526412,190.624408 C34.5996357,195.240801 51.7129326,186.940619 60.8990893,173.23133 C70.0852459,159.52204 68.9661202,141.70929 64.7227687,133.548998 C64.6761384,133.455738 64.6295082,133.362477 64.5362477,133.269217 C66.2149362,132.289982 67.940255,131.264117 69.6189435,130.284882 C72.9296903,128.326412 76.1938069,126.507832 78.9916211,125.015665 C77.4061931,129.352277 76.2404372,134.528233 75.6808743,141.989071 C74.9814208,150.755556 78.571949,162.133333 83.2816029,166.609836 C85.3799636,168.568306 87.8513661,168.614936 89.4367942,168.614936 C94.9391621,168.614936 97.4105647,164.045173 100.161749,158.636066 C103.519126,152.014572 106.550091,144.320583 106.550091,144.320583 C106.550091,144.320583 102.773042,165.117668 113.031694,165.117668 C116.762113,165.117668 120.539162,160.268124 122.217851,157.796721 L122.217851,157.843352 C122.217851,157.843352 122.311111,157.703461 122.497632,157.377049 C122.870674,156.770856 123.103825,156.397814 123.103825,156.397814 L123.103825,156.304554 C124.595993,153.69326 127.95337,147.77122 132.942805,137.93224 C139.377778,125.248816 145.579599,109.394536 145.579599,109.394536 C145.579599,109.394536 146.139162,113.264845 148.051002,119.699818 C149.170128,123.476867 151.501639,127.626958 153.366849,131.637158 C151.874681,133.735519 150.942077,134.901275 150.942077,134.901275 C150.942077,134.901275 150.942077,134.901275 150.988707,134.947905 C149.776321,136.533333 148.470674,138.258652 147.025137,139.937341 C141.942441,145.999271 135.88051,152.947177 135.041166,154.952277 C134.061931,157.330419 134.295082,159.055738 136.160291,160.454645 C137.512568,161.48051 139.937341,161.620401 142.408743,161.48051 C146.978506,161.154098 150.195993,160.034973 151.781421,159.335519 C154.252823,158.449545 157.143898,157.097268 159.848452,155.092168 C164.837887,151.408379 167.868852,146.139162 167.589071,139.191257 C167.44918,135.367577 166.190164,131.543898 164.651366,127.95337 C165.117668,127.300546 165.537341,126.647723 166.003643,125.9949 C173.884153,114.477231 179.992714,101.840437 179.992714,101.840437 C179.992714,101.840437 180.552277,105.710747 182.464117,112.145719 C183.396721,115.409836 185.308561,118.953734 186.98725,122.404372 C179.573042,128.419672 175.003279,135.414208 173.37122,139.983971 C170.433515,148.470674 172.718397,152.294353 177.055009,153.180328 C179.013479,153.6 181.811293,152.667395 183.863024,151.781421 C186.474317,150.942077 189.551913,149.496539 192.489617,147.351548 C197.479053,143.66776 202.281967,138.538434 202.002186,131.590528 C201.862295,128.419672 201.022951,125.295446 199.857195,122.264481 C206.152277,119.653188 214.265938,118.20765 224.617851,119.420036 C246.813843,122.03133 251.197086,135.88051 250.357741,141.70929 C249.518397,147.538069 244.855373,150.708925 243.316576,151.68816 C241.777778,152.667395 241.264845,152.993807 241.404736,153.69326 C241.591257,154.719126 242.337341,154.672495 243.642987,154.485974 C245.461566,154.159563 255.300546,149.776321 255.720219,139.051366 C256.419672,125.342077 243.363206,110.37377 220.281239,110.513661 L220.281239,110.513661 Z M49.0550091,168.241894 C41.6874317,176.262295 31.4287796,179.29326 26.9989071,176.728597 C22.242623,173.977413 24.1078324,162.133333 33.1540984,153.64663 C38.6564663,148.470674 45.7442623,143.66776 50.4539162,140.730055 C51.5264117,140.077231 53.1118397,139.144627 55.0236794,137.978871 C55.3500911,137.79235 55.536612,137.699089 55.536612,137.699089 L55.536612,137.699089 C55.9096539,137.465938 56.2826958,137.232787 56.6557377,136.999636 C59.9664845,149.123497 56.7956284,159.801821 49.0550091,168.241894 L49.0550091,168.241894 Z M102.679781,131.777049 C100.115118,138.025501 94.7526412,154.019672 91.4885246,153.133698 C88.6907104,152.387614 86.9653916,140.263752 90.9289617,128.279781 C92.9340619,122.264481 97.1774135,115.083424 99.648816,112.28561 C103.659016,107.809107 108.088889,106.31694 109.161384,108.135519 C110.513661,110.513661 104.265209,127.860109 102.679781,131.777049 L102.679781,131.777049 Z M146.931876,152.947177 C145.859381,153.50674 144.833515,153.879781 144.367213,153.6 C144.040801,153.413479 144.833515,152.667395 144.833515,152.667395 C144.833515,152.667395 150.382514,146.698725 152.574135,143.994171 C153.833151,142.408743 155.325319,140.543534 156.910747,138.445173 L156.910747,139.051366 C156.910747,146.185792 150.009472,150.988707 146.931876,152.947177 L146.931876,152.947177 Z M181.065209,145.159927 C180.272495,144.600364 180.412386,142.735155 183.07031,136.906375 C184.096175,134.621494 186.520947,130.797814 190.671038,127.114026 C191.137341,128.606193 191.463752,130.05173 191.417122,131.404007 C191.370492,140.403643 184.935519,143.76102 181.065209,145.159927 L181.065209,145.159927 Z">

							</path>
						</g>
					</svg><p>Sass</p></div>
					<div className="wrapper_svg"> <svg width="4rem" height="2rem" viewBox="0 0 188 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M93.295 3.65206L86.356 9.30495H90.8876V27.68L93.295 25.7411V3.65206Z" fill="#5A29E4" />
						<path d="M95.295 24.0997L102.356 18.305H97.6975V0.350052L95.295 2.02275V24.0997Z" fill="#5A29E4" />
						<path d="M182.695 6.95295C183.495 7.36895 184.071 7.72095 184.423 8.00895L186.919 3.25695C185.671 2.48895 184.167 1.80095 182.407 1.19295C180.679 0.584955 178.807 0.280952 176.791 0.280952C174.871 0.280952 173.095 0.600952 171.463 1.24095C169.863 1.88095 168.583 2.82495 167.623 4.07295C166.695 5.32095 166.231 6.87295 166.231 8.72895C166.231 10.809 166.887 12.409 168.199 13.529C169.543 14.617 171.591 15.513 174.343 16.217C176.551 16.793 178.327 17.321 179.671 17.801C181.047 18.249 181.735 19.001 181.735 20.057C181.735 21.625 180.263 22.409 177.319 22.409C175.847 22.409 174.455 22.233 173.143 21.881C171.831 21.529 170.679 21.097 169.687 20.585C168.727 20.073 168.039 19.609 167.623 19.193L165.031 24.233C166.695 25.289 168.599 26.121 170.743 26.729C172.887 27.337 175.047 27.641 177.223 27.641C179.111 27.641 180.871 27.385 182.503 26.873C184.135 26.329 185.447 25.465 186.439 24.281C187.463 23.065 187.975 21.4649 187.975 19.4809C187.975 17.8489 187.591 16.537 186.823 15.545C186.087 14.521 185.015 13.705 183.607 13.097C182.231 12.489 180.599 11.945 178.711 11.465C176.567 10.953 174.935 10.489 173.815 10.073C172.727 9.65695 172.183 8.95295 172.183 7.96095C172.183 6.26495 173.687 5.41695 176.695 5.41695C177.815 5.41695 178.903 5.57695 179.959 5.89695C181.015 6.18495 181.927 6.53695 182.695 6.95295Z" fill="#5A29E4" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M132.182 27.497C130.07 27.497 128.15 27.129 126.422 26.393C124.694 25.625 123.205 24.601 121.957 23.321C120.709 22.009 119.749 20.537 119.077 18.905C118.406 17.273 118.069 15.593 118.069 13.865C118.069 12.105 118.421 10.409 119.125 8.77695C119.829 7.14495 120.822 5.70496 122.102 4.45695C123.382 3.17695 124.885 2.16895 126.613 1.43295C128.341 0.696953 130.229 0.328949 132.277 0.328949C134.389 0.328949 136.31 0.728952 138.038 1.52895C139.766 2.29695 141.238 3.33695 142.454 4.64895C143.702 5.92895 144.661 7.38495 145.333 9.01695C146.005 10.649 146.342 12.3129 146.342 14.0089C146.342 15.7689 145.99 17.465 145.286 19.097C144.582 20.697 143.589 22.137 142.309 23.417C141.061 24.665 139.574 25.657 137.846 26.393C136.118 27.129 134.23 27.497 132.182 27.497ZM123.925 13.913C123.925 15.353 124.262 16.729 124.934 18.041C125.605 19.321 126.549 20.361 127.765 21.161C129.013 21.961 130.501 22.361 132.229 22.361C133.989 22.361 135.477 21.945 136.693 21.113C137.91 20.249 138.837 19.177 139.477 17.8969C140.117 16.5849 140.438 15.241 140.438 13.865C140.438 12.425 140.102 11.0649 139.43 9.78495C138.758 8.50495 137.798 7.48095 136.549 6.71295C135.333 5.91295 133.878 5.51295 132.182 5.51295C130.422 5.51295 128.917 5.92895 127.669 6.76095C126.453 7.59295 125.525 8.64896 124.885 9.92896C124.245 11.209 123.925 12.537 123.925 13.913Z" fill="#5A29E4" />
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.305L11.712 0.472954H16.464L28.128 27.305H21.984L19.296 21.017H8.88L6.192 27.305H0ZM14.112 7.52895L10.176 15.977H17.904L14.112 7.52895Z" fill="#5A29E4" />
						<path d="M50.8211 0.472954L58.2131 9.97695L65.6051 0.472954H71.8931L61.2851 14.057L71.5571 27.305H65.2691L58.2131 18.185L51.2051 27.305H44.8211L55.1411 14.057L44.4851 0.472954H50.8211Z" fill="#5A29E4" />
					</svg><p>Axios</p></div>
				</>
			)
		},
		{ title: 'Back-End development', content: 'Contenu de la section 2' },
		{ title: 'Mobile development', content: 'Contenu de la section 3' },
		{ title: 'Misc tools', content: 'Contenu de la section 4' },
	];
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

							<Accordion items={items} />

						</div>
						<div className="wrapper_img">
							<img src="/example.webp" alt="" />
						</div>
					</div>

				</div>
			</div>
		</section ></>
	)
}

export default Details