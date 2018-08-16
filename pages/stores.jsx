import Navbar from '../components/Navbar';
const Stores = props => {
	return (
		<div className={'stores'}>
			<Navbar menuItems={[]} />
			<main className="container">Not Available</main>
			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					font-family: Nunito, 'Segoe UI';
				}
				body {
					background-color: #fff;
					font-size: 14px;
					color: slategray;
				}
				a {
					color: slategrey;
					text-decoration: none;
				}
				img {
					width: 100%;
				}
				.container {
					position: relative;
					width: 100%;
					max-width: 1000px;
					margin: auto;
				}

				@media (max-width: 1050px) {
					.container {
						padding: 0 1em;
					}
				}

				@media (max-width: 600px) {
					body {
						font-size: 13px;
					}
				}
				.stores {
					background: #4b79a1; /* fallback for old browsers */
					background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
					background: linear-gradient(to right, #283e51, #4b79a1);
					height: 100vh;
					width: 100%;
				}
				main {
					padding-top: 100px !important;
				}
			`}</style>
		</div>
	);
};

export default Stores;
