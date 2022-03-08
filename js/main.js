var slider = tns({
	container: '.hero-slider',
	items: 1,
	controls: false,
	nav: false,
	speed: 400,
	slideBy: 'page',
	autoplay: true,
	autoplayTimeout: 3000,
	"mouseDrag": true,
	"swipeAngle": false,
});

var brandSlider = tns({
	container: '.brand-slider',
	items: 4,
	controls: false,
	nav: false,
	speed: 1000,
	slideBy: 'page',
	autoplay: true,
	autoplayTimeout: 5000,
	"mouseDrag": true,
	"swipeAngle": false,
	"responsive": {
		"350": {
			"items": 2
		},
		"500": {
			"items": 3
		},
		"750": {
			"items": 4
		}
	},
});
