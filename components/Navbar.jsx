import Link from 'next/link';

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
							<a>Stores</a>
						</Link>
					</li>
					<li>
						<Link href={'/download'}>
							<a>Download</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
		<style jsx>{`
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
			ul li a {
				display: flex;
				align-items: center;
				height: 100%;
				padding: 0 1em;
				color: #eee;
			}
			ul li a:hover {
				color: #fff;
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
