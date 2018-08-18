import Link from 'next/link';
import Navbar from '../components/Navbar';

import { Icon } from 'react-icons-kit';
import { shoppingBasket } from 'react-icons-kit/fa/shoppingBasket';

const stores = [
	{
		name: 'Jumia',
		description: `
			Jumia is your number one online shopping site in Nigeria. We are an online store where you can purchase all your electronics, as well as books, home appliances, kiddies items, fashion items for men, women, and children; cool gadgets, computers, groceries, automobile parts, and more on the go. What more? You can have them delivered directly to you. Shop online with great ease as you pay with JumiaPay which guarantees you the safest online shopping payment method, allowing you make stress free payments. Whatever it is you wish to buy, Jumia offers you all and lots more at prices which you can trust. Jumia has payment options for everyone irrespective of taste, class, and preferences. Here, you also have the option to make your payment on delivery for extra convenience. Shopping online in Nigeria is easy and convenient with Jumia. We provide you with a wide range of products you can trust. Take part in the deals of the day and discover the best prices on a wide range of products.
		`,
		link: 'jumia.com.ng'
	},
	{
		name: 'Konga',
		description: `
			Konga.com is Nigeria’s number one online shopping destination. We pride ourselves on having everything you could possibly need for life and living at the best prices than anywhere else. Our access to Original Equipment Manufacturers and premium sellers gives us a wide range of products at very low prices. Some of our popular categories include electronics, mobile phones, computers, fashion, beauty products, home and kitchen, Building and construction materials and a whole lot more from premium brands.
		`,
		link: 'konga.com'
	},
	{
		name: 'Slot',
		description: `
		SLOT Systems Limited is the leading retail company for affordable and durable mobile phones, computers, accessories, and various types of Electronics. We consider it necessary to fill up this need in the global information technology sector with emphasis on Africa market. As an indigenous company, established in 1998, we don’t just sell electronic gadgets, we provide first class after sales support that is comparable to international market standard. 
		Over the years, we have been the first to announce and introduce new Brands, and services such as, Mobile Phone engineering service, phone screen insurance, phone trade-In, Stolen Phone recovery app and much more.
		Slot Systems made a priceless contribution in providing personal computer (PCs) and its related services in the late 90s.
		With the ability of our dynamic leadership in the retail sector, we have continuously provided excellent customer experience.`,
		link: 'slot.ng'
	}
];

const Stores = props => {
	return (
		<div className="stores">
			<Navbar
				menuItems={[]}
				style={{
					background: 'linear-gradient(to bottom, rgb(40, 62, 81), transparent)'
				}}
			/>
			<main className="container">
				{stores.map((store, i) => (
					<section className="store">
						<h3 className="name">
							<span className="icon">
								<Icon icon={shoppingBasket} />
							</span>{' '}
							<span>{store.name}</span>
						</h3>
						<p>{store.description}</p>
						<Link href={`http://${store.link}`}>
							<a className="link" target="_blank">
								Visit
							</a>
						</Link>
					</section>
				))}
			</main>
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
				main {
					padding-top: 130px !important;
				}
				.stores {
					background: #4b79a1; /* fallback for old browsers */
					background: -webkit-linear-gradient(to right, #283e51, #4b79a1);
					background: linear-gradient(to right, #283e51, #4b79a1);
					height: 100vh;
					width: 100%;
					overflow-y: auto;
				}
				.store {
					border-radius: 2px;
					margin: 20px 0;
					padding: 1em 2em;
					display: flex;
					background-color: #283e51;
					flex-flow: column;
					color: #ccc;
					box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
				}
				.store .name {
					margin-bottom: 20px;
				}
				.store .name .icon * {
					padding-top: 4px;
					margin-right: 5px;
				}
				.store p {
					margin-bottom: 20px;
				}
				.store .link {
					padding: 0.6em 1em;
					border: 0;
					background-color: teal;
					color: #fff;
					align-self: flex-end;
					border-radius: 3px;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export default Stores;
