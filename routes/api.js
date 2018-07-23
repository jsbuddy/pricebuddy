const express = require('express');
const router = express.Router();
const Xray = require('x-ray');
const xray = new Xray();

router.get('/fetch', async (req, res) => {
	const q = req.query.q;

	const jumia = await scrap(
		`https://www.jumia.com.ng/catalog/?q=${q}`,
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
		`https://www.konga.com/catalogsearch/result/?q=${q}`,
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
	res.json({ jumia, konga });
});

module.exports = router;

function scrap(url, el, obj) {
	return new Promise((resolve, reject) => {
		xray(url, el, obj)((err, res) => {
			err ? resolve([]) : resolve(res);
		});
	});
}
