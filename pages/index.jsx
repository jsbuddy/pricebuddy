import 'core-js/es6';
import 'core-js/es7';
import React, { Component } from 'react';
import Header from '../components/Header';
import Results from '../components/Results';
import Loader from '../components/Loader';
import Head from 'next/head';
import 'isomorphic-fetch';

class App extends Component {
	state = {
		searched: false,
		fetching: false,
		data: {}
	};

	_fetch = q => {
		this.setState({ fetching: true, searched: true });

		fetch(`/api/fetch?q=${q}`)
			.then(res => res.json())
			.then(data => this.setState({ fetching: false, data }))
			.catch(err => {
				alert('An error occurred!');
				console.log(err);
			});
	};

	render() {
		const { searched, fetching, data } = this.state;

		return (
			<div>
				<Head>
					<meta charSet="UTF-8" />
					<meta
						name={'viewport'}
						content={
							'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
						}
					/>
					<meta httpEquiv={'X-UA-Compatible'} content="ie=edge" />
					<title>Price Buddy</title>
				</Head>
				<Header _fetch={this._fetch} searched={searched} />
				{fetching && <Loader />}
				{!fetching && searched && <Results data={data} />}

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
				`}</style>
			</div>
		);
	}
}

export default App;
