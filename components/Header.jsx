import Navbar from '../components/Navbar';

class Header extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		const value = Array.from(e.target)
			.filter(el => el.name === 'search')[0]
			.value.trim();
		value && this.props._fetch(value);
	};

	render() {
		const {searched} = this.props;

		return (
			<header className={`${searched && 'searched'}`}>
				<Navbar searched={searched} />
				<div className="container">
					<div className={'content'}>
						<form className={'search-input'} onSubmit={this.handleSubmit}>
							<input
								type={'search'}
								placeholder={'Search for a product..'}
								name={'search'}
							/>
							<button type={'submit'}>Search</button>
						</form>
					</div>
				</div>
				<style jsx>{`
					header {
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						background: linear-gradient(45deg, steelblue, #1ba899, #008f89);
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.051);
						z-index: 1;
					}
					header > .container {
						display: flex;
						align-items: center;
						justify-content: center;
						height: 100vh;
						transition: all 0.6s ease;
						padding-top: 0;
					}
					header.searched > .container {
						height: 100px;
					}
					header * {
						color: #fff;
					}
					header .content {
						width: 100%;
						max-width: 500px;
						text-align: center;
						z-index: 2;
					}
					header .logo {
						font-size: 2.5em;
						font-weight: bolder;
					}
					header .search-input {
						width: 100%;
						display: flex;
						box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
					}
					header .search-input * {
						color: slategray;
					}
					header .search-input input {
						border: 0;
						padding: 1.5em;
						width: 75%;
						border-radius: 3px 0 0 3px;
						font: inherit;
					}
					header .search-input button {
						font: inherit;
						border: 0;
						border-radius: 0 3px 3px 0;
						padding: 1em;
						width: 25%;
						cursor: pointer;
						background-color: #eee;
					}
					header .search-input button:hover {
						background-color: #ddd;
					}

					@media (max-width: 900px) {
						header {
							position: relative;
						}
						header > .container {
							display: flex;
							align-items: center;
							justify-content: center;
						}
						header.searched > .container {
							padding-top: 110px;
							padding-bottom: 2em;
							height: 210px;
						}
					}
				`}</style>
			</header>
		);
	}
}

export default Header;
