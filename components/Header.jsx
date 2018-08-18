import Navbar from '../components/Navbar';

import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import { shoppingCart } from 'react-icons-kit/fa/shoppingCart';

class Header extends React.Component {
	state = {
		value: '',
		inputError: false
	};

	handleSearch = () => {
		const value = this.state.value.trim();
		!value ? this.setState({ inputError: true }) : this.props._fetch(value);
	};

	handleChange = e => this.setState({ value: e.target.value, inputError: false });

	handleKeyUp = e => e.keyCode === 13 && this.handleSearch();

	render() {
		const { value, inputError } = this.state;
		const { searched } = this.props;

		return (
			<header className={`${searched && 'searched'}`}>
				<Navbar
					searched={searched}
					links={[{ name: 'Stores', href: '/stores', icon: shoppingCart }]}
					style={{
						background: 'linear-gradient(to bottom, rgb(40, 62, 81), transparent)'
					}}
				/>
				<div className="container">
					<div className={'content'}>
						<div className={'search-input'}>
							<input
								type={'text'}
								placeholder={'Search for a product..'}
								name={'search'}
								value={value}
								onChange={this.handleChange}
								onKeyUp={this.handleKeyUp}
								className={inputError && 'error'}
							/>
							<button onClick={this.handleSearch}>
								<Icon icon={search} />
							</button>
						</div>
					</div>
				</div>
				<style jsx>{`
					header {
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						// box-shadow: 0 0 10px rgba(0, 0, 0, 0.051);
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
						z-index: 1;
						background: #4b79a1; /* fallback for old browsers */
						background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
						background: linear-gradient(to right, #283e51, #4b79a1);
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
						position: relative;
					}
					header .search-input * {
						color: slategray;
					}
					header .search-input input {
						border: 0;
						padding: 1.5em;
						width: 100%;
						border-radius: 3px;
						font: inherit;
						padding-right: 13%;
					}
					header .search-input input.error {
						box-shadow: 0 0 30px #b721218c;
						animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
						transform: translate3d(0, 0, 0);
						backface-visibility: hidden;
						perspective: 1000px;
					}
					header .search-input button {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						right: 3%;
						height: 45px;
						width: 45px;
						border: 0;
						padding: 1em;
						cursor: pointer;
						background-color: transparent;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 50%;
					}

					header .search-input button * {
						fill: #4e4376;
					}

					header .search-input button:hover {
						background-color: #f8f8f8;
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

					@keyframes shake {
						10%,
						90% {
							transform: translate3d(-1px, 0, 0);
						}

						20%,
						80% {
							transform: translate3d(2px, 0, 0);
						}

						30%,
						50%,
						70% {
							transform: translate3d(-2px, 0, 0);
						}

						40%,
						60% {
							transform: translate3d(2px, 0, 0);
						}
					}
				`}</style>
			</header>
		);
	}
}

export default Header;
