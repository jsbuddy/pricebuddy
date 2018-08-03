import Navbar from '../components/Navbar';
import {FaSearch} from 'react-icons/fa/index';

class Header extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		const value = Array.from(e.target)
			.filter(el => el.name === 'search')[0]
			.value.trim();
		value && this.props._fetch(value);
		return false;
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
								type={'text'}
								placeholder={'Search for a product..'}
								name={'search'}
							/>
							<button type={'submit'}>
								<FaSearch />
							</button>
						</form>
					</div>
				</div>
				<style jsx>{`
					header {
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						// background: linear-gradient(45deg, steelblue, #1ba899, #008f89);
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.051);
						z-index: 1;
						background: #141e30; /* fallback for old browsers */
						background: -webkit-linear-gradient(
							to right,
							#243b55,
							#141e30
						); /* Chrome 10-25, Safari 5.1-6 */
						background: linear-gradient(
							to right,
							#243b55,
							#141e30
						); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

						background: #4b79a1; /* fallback for old browsers */
						background: -webkit-linear-gradient(
							to right,
							#283e51,
							#4b79a1
						); /* Chrome 10-25, Safari 5.1-6 */
						background: linear-gradient(
							to right,
							#283e51,
							#4b79a1
						); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

						// background: #136a8a;
						// background: -webkit-linear-gradient(
						// 	to right,
						// 	#267871,
						// 	#136a8a
						// );
						// background: linear-gradient(
						// 	to right,
						// 	#267871,
						// 	#136a8a
						// );
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
				`}</style>
			</header>
		);
	}
}

export default Header;
