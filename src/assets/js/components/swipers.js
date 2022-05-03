const sliderContainer = document.querySelector('.slider')
const casesSliderContainer = document.querySelector('.cases__slider')

if (sliderContainer) {
	const slider = new Swiper('.slider', {
		direction: 'horizontal',
		loop: true,
		spaceBetween: 30,
		autoHeight: true
	})
}


if (casesSliderContainer) {
	const casesSlider = new Swiper('.cases__slider', {
	
		direction: 'horizontal',
		loop: false,
		slidesPerView: 1,
		spaceBetween: 16,
		breakpoints: {
			700: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1160: {
				slidesPerView: 3,
				spaceBetween: 0
			}
		},
	
		pagination: {
			el: '.cases__pagination',
			bulletActiveClass: 'cases__pagination-bullet--active',
			bulletClass: 'cases__pagination-bullet',
			clickable: true
		},
	
		wrapperClass: 'cases__wrapper',
    slideClass: 'cases__slide',
		
	});

	updateTouchMove()

	window.addEventListener('resize', () => {
		updateTouchMove()
	})
	
	function updateTouchMove(){
		if (window.innerWidth >= 1160) {
			if(casesSlider){
				casesSlider.slideTo(0, 0)
				casesSlider.allowTouchMove = false
			}
		}else if(window.innerWidth < 1160){
			if(casesSlider){
				casesSlider.allowTouchMove = true
			}
		}
	}
}

	