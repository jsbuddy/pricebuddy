import Link from 'next/link';
import { Icon } from 'react-icons-kit';

export default props => (
	<div>
		<nav style={props.style && { ...props.style }}>
			<div className="container">
				<div className={'logo'}>
					<Link href={'/'}>
						<a>
							<img src={'/pb.png'} />
						</a>
					</Link>
				</div>
				<ul>
					{(props.links || []).map(link => (
						<li key={link.name}>
							<Link href={link.href}>
								<a>
									<span className={'nav-icon'}>
										<Icon icon={link.icon} />
									</span>
									{link.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
		<style jsx>{`
			.nav-icon {
				color: 'red';
				margin-top: 2px;
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
				color: orange;
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
