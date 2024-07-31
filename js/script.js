document.addEventListener('DOMContentLoaded', () => {
	const firstSectionContainer = document.querySelector(
		'.first-section .container'
	)
	const header = document.getElementById('header'),
		decor1 = document.querySelector('.decor-1'),
		decor2 = document.querySelector('.decor-2'),
		decor3 = document.querySelector('.decor-3'),
		decor4 = document.querySelector('.decor-4'),
		decor5 = document.querySelector('.decor-5'),
		decor6 = document.querySelector('.decor-6'),
		decor7 = document.querySelector('.decor-7'),
		decor07 = document.querySelector('.decor-07'),
		decor8 = document.querySelector('.decor-8')

	gsap.registerPlugin(ScrollTrigger)

	window.addEventListener('scroll', function () {
		if (window.scrollY >= 100) {
			header.classList.add('header_scroll') // Добавляем новый класс
		} else {
			header.classList.remove('header_scroll') // Убираем класс, если прокрутка меньше 100 пикселей
		}
	})

	// Проверка медиазапроса
	const mediaQuery = window.matchMedia('(min-width: 1025px)')
	const mediaQuery767 = window.matchMedia('(min-width: 768px)')

	function applyAnimations() {
		if (mediaQuery767.matches) {
			gsap.to(firstSectionContainer, {
				opacity: 0,
				ease: 'none',
				scrollTrigger: {
					start: '1px',
					end: '400px',
					scrub: true,
					onUpdate: self => {
						if (self.progress === 1) {
							firstSectionContainer.style.visibility = 'hidden'
						} else {
							firstSectionContainer.style.visibility = 'visible'
						}
					},
				},
			})
		}

		if (mediaQuery.matches) {
			// Анимации для экранов больше 1024px
			/// Анимации для каждого элемента декора
			gsap.to(decor1, {
				scale: 1.6,
				x: '-170%',
				y: '-40%',
				filter: 'blur(1px)',
				opacity: 0.9,
				ease: 'none',
				scrollTrigger: {
					start: '100px',
					end: '600px',
					scrub: true,
				},
			})

			gsap.to(decor2, {
				scale: 1.2,
				x: '140%',
				y: '6%',
				filter: 'blur(1px)',
				opacity: 0.9,
				ease: 'none',
				scrollTrigger: {
					start: '150px',
					end: '650px',
					scrub: true,
				},
			})

			gsap.to(decor3, {
				scale: 0.6,
				x: '-124%',
				y: '140%',
				filter: 'blur(3px)',
				opacity: 0.8,
				ease: 'none',
				scrollTrigger: {
					start: '100px',
					end: '600px',
					scrub: true,
				},
			})

			gsap.to(decor4, {
				scale: 1,
				x: '-270%',
				y: '-120%',
				filter: 'blur(3px)',
				opacity: 0.7,
				ease: 'none',
				scrollTrigger: {
					start: '150px',
					end: '650px',
					scrub: true,
				},
			})

			gsap.to(decor5, {
				scale: 1,
				x: '260%',
				y: '-80%',
				filter: 'blur(1px)',
				opacity: 0.6,
				ease: 'none',
				scrollTrigger: {
					start: '100px',
					end: '600px',
					scrub: true,
				},
			})

			gsap.to(decor6, {
				scale: 1,
				x: '550%',
				y: '-42%',
				filter: 'blur(0px)',
				opacity: 0.8,
				ease: 'none',
				scrollTrigger: {
					start: '150px',
					end: '650px',
					scrub: true,
				},
			})

			gsap.to(decor7, {
				scale: 1.7,
				x: '180%',
				y: '550%',
				filter: 'blur(0px)',
				opacity: 1,
				ease: 'none',
				scrollTrigger: {
					start: '100px',
					end: '600px',
					scrub: true,
				},
			})

			gsap.to(decor07, {
				scale: 1.2,
				x: '100%',
				y: '-500%',
				filter: 'blur(3px)',
				opacity: 0.8,
				ease: 'none',
				scrollTrigger: {
					start: '100px',
					end: '600px',
					scrub: true,
				},
			})

			gsap.to(decor8, {
				scale: 1.5,
				x: '-250%',
				y: '298%',
				filter: 'blur(0)',
				opacity: 1,
				ease: 'none',
				scrollTrigger: {
					start: '200px',
					end: '650px',
					scrub: true,
				},
			})
		}

		// Анимации для второй секции
		gsap.to('#titleOpacity-1', {
      color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 50%',
				end: 'top 40%',
				scrub: true,
			},
		})

		gsap.to('#titleOpacity-2', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 45%',
				end: 'top 35%',
				scrub: true,
			},
		})

		gsap.to('#titleOpacity-3', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 40%',
				end: 'top 30%',
				scrub: true,
			},
		})

		gsap.to('#titleOpacity-4', {
      opacity: 1,
      width: 66,
      margin: '0 16px 0 6px',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 35%',
				end: 'top 25%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-5', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 30%',
				end: 'top 20%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-6', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 25%',
				end: 'top 15%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-7', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 20%',
				end: 'top 10%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-8', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 15%',
				end: 'top 5%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-9', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 10%',
				end: 'top 0%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-10', {
			opacity: 1,
			width: 66,
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 5%',
				end: 'top -5%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-11', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 0%',
				end: 'top -10%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-12', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top -5%',
				end: 'top -15%',
				scrub: true,
			},
		})

    gsap.to('#titleOpacity-13', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top -10%',
				end: 'top -20%',
				scrub: true,
			},
		})

    ScrollTrigger.create({
			trigger: '.second-section',
			start: 'top -20%',
			scrub: true,
			onEnter: () => {
				document.querySelector('#titleOpacity-14').classList.add('visible')
			},
			onLeaveBack: () => {
				document.querySelector('#titleOpacity-14').classList.remove('visible')
			},
			onLeave: () => {
				document.querySelector('#titleOpacity-14').classList.remove('visible')
			},
		})

	}

	// Применение анимаций при загрузке страницы
	applyAnimations()

	// Добавление слушателя для изменений размера экрана
	mediaQuery.addEventListener('change', applyAnimations)
})

$('.sliders').slick({
	infinite: true,
	slidesToShow: 1,
})
