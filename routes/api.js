const express = require('express');
const router = express.Router();
const Xray = require('x-ray');
const xray = new Xray();
const url = require('url');

router.get('/fetch', async (req, res) => {
	const q = req.query.q;

	const jumia = await scrap(
		url.parse(`https://www.jumia.com.ng/catalog/?q=${q}`).href,
		'.products .sku',
		[
			{
				brand: '.title .brand',
				name: '.title .name',
				price: {
					special: '.price-container .price-box .price',
					original: '.price-container .price-box .price .-old'
				},
				img: '.image-wrapper.default-state img.lazy@data-src',
				link: '.link@href'
			}
		]
	);
	const konga = await scrap(
		url.parse(`https://www.konga.com/catalogsearch/result/?q=${q}`).href,
		'.product-block-container',
		[
			{
				brand: '.merchant-name li:last-child',
				name: '.product-name span',
				price: {
					special: '.special-price',
					original: '.original-price'
				},
				merchant: {
					icon: '.konga-warehouse-fa img@src',
					name: '.konga-warehouse-fa .warehouse-text'
				},
				img: 'img.catalog-product-image@src',
				link: '.product-name a@href'
			}
		]
	);
	const slot = await scrap(
		url.parse(`http://slot.ng/?s=${q}&search_posttype=product`).href,
		'.product.type-product',
		[
			{
				name: '.products-content h4 a',
				price: {
					special: '.item-price ins .amount',
					original: '.item-price del .amount',
					slotprice: '.item-price .amount'
				},
				img: '.products-thumb img@data-lazy-src',
				link: '.products-content h4 a@href'
			}
		]
	);

	res.json({jumia, konga, slot});
});

module.exports = router;

function scrap(url, el, obj) {
	return new Promise((resolve, reject) => {
		xray(url, el, obj)((err, res) => {
			err ? resolve([]) : resolve(res);
		});
	});
}
