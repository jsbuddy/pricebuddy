import Link from 'next/link';
import {FaStore, FaDownload} from 'react-icons/fa/index';
import {IconContext} from 'react-icons';

const iconStyle = {
	fill: '#ddd',
	marginTop: 2
};

export default () => (
	<div>
		<nav>
			<div className="container">
				<div className={'logo'}>
					<Link href={'/'}>
						<a>
							<img src={'/static/pb.png'} />
						</a>
					</Link>
				</div>
				<ul>
					<li>
						<Link href={'/stores'}>
							<a>
								<span>
									<IconContext.Provider value={{style: iconStyle}}>
										<FaStore />
									</IconContext.Provider>
								</span>Stores
							</a>
						</Link>
					</li>
					{/* <li>
						<Link href={'/download'}>
							<a>
								<span>
									<IconContext.Provider value={{style: iconStyle}}>
										<FaDownload />
									</IconContext.Provider>
								</span>Download
							</a>
						</Link>
					</li> */}
				</ul>
			</div>
		</nav>
		<style jsx>{`
			.nav-icon {
				fill: 'red';
			}
			nav {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				z-index: 1;
			}
			nav > * {
				height: 100px;
				display: flex;
				justify-content: space-between;
			}
			nav .logo {
				width: 100px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			ul {
				display: flex;
				list-style: none;
			}
			ul li {
				display: block;
				height: 100%;
			}
			ul li a span {
				margin-right: 7px;
				line-height: 100%;
			}
			ul li a {
				display: flex;
				align-items: center;
				height: 100%;
				padding: 0 0.8em;
				color: #eee;
			}
			ul li a:hover {
				color: #fff;
			}
			ul li a * {
				fill: red;
			}
			@media (max-width: 1050px) {
				ul li a {
					padding: 0;
				}
				ul li + li a {
					padding-left: 0.8em;
				}
			}
		`}</style>
	</div>
);
