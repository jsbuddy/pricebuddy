class Results extends React.Component {
	state = {
		minPrice: 0,
		maxPrice: 220000,
		stores: [],
		products: []
	};

	componentWillMount() {
		const {data} = this.props;
		this.stores = Object.keys(data).map(key => key.toLowerCase());
		const products = Object.keys(data)
			.reduce((_new, key) => {
				const final = data[key].map(p => {
					p.store = key;
					return p;
				});
				return _new.concat(final);
			}, [])
			.filter(product => product.name && (product.price.special || product.price.original));

		this.setState({stores: this.stores, products});
	}

	handleFilter = e => {
		e.preventDefault();
		const data = Array.from(e.target);

		const minPrice = data.find(el => el.name === 'min-price').value,
			maxPrice = data.find(el => el.name === 'max-price').value,
			stores = data.reduce((_new, el) => {
				if (el.type === 'checkbox') {
					el.checked && _new.push(el.name);
				}
				return _new;
			}, []);

		this.setState({minPrice, maxPrice, stores});
	};

	striprice = p => {
		return p
			.trim()
			.replace(' ', '')
			.replace('₦', '')
			.replace(',', '');
	};

	capitalize = str => {
		return str
			.toLowerCase()
			.split(' ')
			.map(word => word[0].toUpperCase() + word.substr(1))
			.join(' ');
	};

	render() {
		const {minPrice, maxPrice, stores, products} = this.state;

		console.log(this.props.data, stores);

		return (
			<div className={'results'}>
				<div className={'container'}>
					<div className={'wrapper'}>
						<div className={'filter-wrap'}>
							<form className={'filter'} onSubmit={this.handleFilter}>
								<section>
									<h4 className={'title'}>Price</h4>
									<div className={'box'}>
										<input
											type={'number'}
											name={'min-price'}
											defaultValue={minPrice}
											step={1000}
										/>
										<input
											type={'number'}
											name={'max-price'}
											defaultValue={maxPrice}
											step={1000}
										/>
									</div>
								</section>
								<section>
									<h4 className={'title'}>Store</h4>
									{this.stores.map((store, i) => {
										const checked = stores.reduce((check, _store) => {
											if (_store === store) check = true;
											return check;
										}, false);
										return (
											<div key={i} className={'checkbox'}>
												<input
													type={'checkbox'}
													id={store.toLowerCase()}
													name={store.toLowerCase()}
													className={store.toLowerCase()}
													defaultChecked={checked}
												/>
												<label htmlFor={store.toLowerCase()}>
													{this.capitalize(store)}
													<span className="length">
														{
															products.filter(p => p.store === store)
																.length
														}
													</span>
												</label>
											</div>
										);
									})}
								</section>
								<div className={'filter-button'}>
									<button type={'submit'}>Filter</button>
								</div>
							</form>
						</div>
						<div className={'results-wrap'}>
							<div className={'items'}>
								{products
									.filter(product => stores.includes(product.store))
									.filter(product => {
										const price = parseInt(
											this.striprice(
												product.price.special || product.price.original
											),
											10
										);
										return price > minPrice && price < maxPrice;
									})
									.sort((a, b) => {
										const aPrice = parseInt(
											this.striprice(a.price.special || a.price.original),
											10
										);
										const bPrice = parseInt(
											this.striprice(b.price.special || b.price.original),
											10
										);
										return aPrice < bPrice;
									})
									.map(
										(product, i) =>
											product.name && (
												<div className={'item'} key={i}>
													<div className={'img'}>
														<img src={product.img} />
													</div>
													<div className={'content'}>
														<h4 className={'name'}>
															<a href={product.link}>
																{product.name}
															</a>
														</h4>
														<h5 className={'price'}>
															{product.price.special
																? product.price.special
																: product.price.original}
															<span className="old">
																{product.price.special
																	? product.price.original
																	: ''}
															</span>
														</h5>
														<span className={'rating'} />
														<h6 className={'store'}>
															{this.capitalize(product.store)} |{' '}
															{product.brand}
														</h6>
													</div>
												</div>
											)
									)}
								{/* 								
								<div className={'item'}>
									<div className={'img'}>
										<img src={'/static/item.jpg'} />
									</div>
									<div className={'content'}>
										<h4 className={'name'}>
											Lenovo IdeaPad 4, London Used, 4gb RAM, 200GB HDD, Intel
											6th Gen Core i8
										</h4>
										<h5 className={'price'}>
											N34,556 <span className="old">N33444</span>
										</h5>
										<span className={'rating'} />
										<h6 className={'store'}>Jumia Nigeria</h6>
									</div>
								</div>
								<div className={'item'}>
									<div className={'img'}>
										<img src={'/static/item.jpg'} />
									</div>
									<div className={'content'}>
										<h4 className={'name'}>Infinix Hot 4</h4>
										<h5 className={'price'}>N34,556</h5>
										<span className={'rating'} />
										<h6 className={'store'}>Jumia Nigeria</h6>
									</div>
								</div>
								<div className={'item'}>
									<div className={'img'}>
										<img src={'/static/item.jpg'} />
									</div>
									<div className={'content'}>
										<h4 className={'name'}>Infinix Hot 4</h4>
										<h5 className={'price'}>N34,556</h5>
										<span className={'rating'} />
										<h6 className={'store'}>Jumia Nigeria</h6>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
				<style jsx>{`
					.box {
						display: flex;
						width: 100%;
					}
					.box > * {
						width: 50%;
					}
					.results {
						height: 100vh;
						padding-top: 100px;
					}
					.wrapper {
						display: flex;
						flex-direction: row;
						padding: 5em 0;
					}
					.results-wrap {
						flex: 1;
						overflow: hidden;
					}
					.items {
						padding-left: 3em;
					}
					.items .item {
						display: flex;
						flex-direction: row;
						border-bottom: 1px solid rgba(0, 0, 0, 0.04);
						padding: 2em 0;
						overflow: hidden;
					}
					.items .item .img {
						flex: 0;
						min-width: 100px;
						height: 100px;
						border-radius: 3px;
						overflow: hidden;
					}
					.items .item .img img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
					.items .item .content {
						padding-left: 2em;
						display: flex;
						flex-direction: column;
						overflow: hidden;
					}
					.items .item .content .name {
						font-size: 1.3em;
						overflow: hidden;
						text-overflow: ellipsis;
						margin-bottom: 5px;
					}
					.items .item .content .price {
						font-size: 1.1em;
						color: steelblue;
					}
					.items .item .content .price .old {
						font-size: 1em;
						color: #ccc;
						margin-left: 6px;
						text-decoration: line-through;
					}
					.items .item .content .rating {
						flex: 1;
						display: flex;
						align-items: center;
					}
					.items .item .content .store {
						font-size: 1em;
						color: lightgrey;
					}
					.filter-wrap {
						flex: 0;
						min-width: 250px;
						background-color: inherit;
					}
					.filter {
						position: sticky;
						top: 150px;
						padding-right: 3em;
						padding-bottom: 1em;
						border-right: 1px solid rgba(0, 0, 0, 0.1);
					}
					.filter section {
						width: 100%;
						padding: 2em 0 1em;
					}
					.filter section .title {
						color: steelblue;
						margin: 0 0 10px 3px;
					}
					.filter section input[type='number'] + input[type='number'] {
						margin-left: 3px;
					}
					.filter section input[type='number'] {
						display: inline;
						padding: 0.7em 0.8em;
						border: 1px solid rgba(0, 0, 0, 0.05);
						border-radius: 2px;
						background-color: #eee;
						color: slategrey;
					}
					.filter section .checkbox {
						display: block;
						width: 100%;
						border-radius: 3px;
					}
					.filter section .checkbox input[type='checkbox'] {
						display: none;
					}
					.filter section .checkbox input[type='checkbox'] + label {
						display: block;
						width: 100%;
						position: relative;
						padding-left: 20px;
						cursor: pointer;
						padding: 7px 0 7px 25px;
					}
					.filter section .checkbox input[type='checkbox'] + label::after {
						content: '';
						color: slategrey;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translateY(-50%);
						width: 14px;
						height: 14px;
						border-radius: 2px;
						background-color: #eee;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 10px;
					}
					.filter section .checkbox input[type='checkbox']:checked + label::after {
						content: '✔';
						color: slategrey;
					}
					.filter section label span {
						margin-left: 10px;
						background-color: #ddd;
						border: 1px solid rgba(0, 0, 0, 0.07);
						border-radius: 3px;
						padding: 0 0.6em;
						color: #333;
						font-size: 0.7em;
					}
					.filter .filter-button {
						text-align: right;
						cursor: pointer;
					}
					.filter button {
						padding: 0.7em;
						border: 0;
						border-radius: 3px;
						background-color: #ddd;
						cursor: pointer;
					}
					.filter button:hover {
						background-color: #eee;
					}

					@media (max-width: 1050px) {
						.results {
							height: 100vh;
						}
						.wrapper {
							display: flex;
							flex-direction: column;
							padding: 0;
						}
						.filter {
							position: relative;
							top: 0;
							padding: 0;
							padding-bottom: 2em;
							border: 0;
							border-bottom: 1px solid rgba(0, 0, 0, 0.1);
						}
						.items {
							padding: 0;
						}
					}
					@media (max-width: 900px) {
						.results {
							height: 100vh;
							padding: 2em 0;
						}
					}
				`}</style>
			</div>
		);
	}
}

export default Results;
