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
		if (window.scrollY >= 10) {
			header.classList.add('header_scroll') // Добавляем новый класс
		} else {
			header.classList.remove('header_scroll') // Убираем класс, если прокрутка меньше 100 пикселей
		}
	})

	let lastScrollY = window.scrollY

	window.addEventListener('scroll', function () {
		if (window.scrollY < lastScrollY) {
			header.classList.add('header_sticky')
		} else {
			header.classList.remove('header_sticky')
		}
		lastScrollY = window.scrollY
	})

	// Проверка медиазапроса
	const mediaQuery = window.matchMedia('(min-width: 768px)')
	const mediaQuery767 = window.matchMedia('(max-width: 767px)')

	function applyAnimations() {
		// Очистка предыдущих анимаций
		ScrollTrigger.getAll().forEach(t => t.kill())

		if (mediaQuery.matches) {
			// Анимации для экранов больше 1024px

			gsap.to(firstSectionContainer, {
				opacity: 0,
				ease: 'none',
				scrollTrigger: {
					start: '1px',
					end: '400px',
					scrub: true,
					invalidateOnRefresh: true,
					onUpdate: self => {
						if (self.progress === 1) {
							firstSectionContainer.style.visibility = 'hidden'
						} else {
							firstSectionContainer.style.visibility = 'visible'
						}
					},
				},
			})

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
					invalidateOnRefresh: true,
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
					invalidateOnRefresh: true,
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
					invalidateOnRefresh: true,
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
					invalidateOnRefresh: true,
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
					invalidateOnRefresh: true,
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
					invalidateOnRefresh: true,
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
					invalidateOnRefresh: true,
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
					invalidateOnRefresh: true,
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
					invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
			},
		})

		if (mediaQuery.matches) {
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
					invalidateOnRefresh: true,
				},
			})
		}

		if (mediaQuery767.matches) {
			gsap.to('#titleOpacity-4', {
				opacity: 1,
				width: 30,
				margin: '0 10px 0 0',
				duration: 0.5,
				scrollTrigger: {
					trigger: '.second-section',
					start: 'top 35%',
					end: 'top 25%',
					scrub: true,
					invalidateOnRefresh: true,
				},
			})
		}

		gsap.to('#titleOpacity-5', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 30%',
				end: 'top 20%',
				scrub: true,
				invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
			},
		})

		if (mediaQuery.matches) {
			gsap.to('#titleOpacity-10', {
				opacity: 1,
				width: 66,
				duration: 0.5,
				scrollTrigger: {
					trigger: '.second-section',
					start: 'top 5%',
					end: 'top -5%',
					scrub: true,
					invalidateOnRefresh: true,
				},
			})
		}

		if (mediaQuery767.matches) {
			gsap.to('#titleOpacity-10', {
				opacity: 1,
				width: 36,
				duration: 0.5,
				scrollTrigger: {
					trigger: '.second-section',
					start: 'top 5%',
					end: 'top -5%',
					scrub: true,
					invalidateOnRefresh: true,
				},
			})
		}

		gsap.to('#titleOpacity-11', {
			color: '#000',
			duration: 0.5,
			scrollTrigger: {
				trigger: '.second-section',
				start: 'top 0%',
				end: 'top -10%',
				scrub: true,
				invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
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
				invalidateOnRefresh: true,
			},
		})

		ScrollTrigger.create({
			trigger: '.second-section',
			start: 'top -20%',
			scrub: true,
			invalidateOnRefresh: true,
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

		//! Анимации для ТРЕТЬЕй секции
		gsap.to('#slid1', {
			opacity: 0,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top 0%',
				end: 'top -30%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slid2', {
			opacity: 1,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -15%',
				end: 'top -45%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slid2', {
			opacity: 0,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -75%',
				end: 'top -106%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slid3', {
			opacity: 1,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -90%',
				end: 'top -120%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slid3', {
			opacity: 0,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -150%',
				end: 'top -180%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slid4', {
			opacity: 1,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -165%',
				end: 'top -195%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slid4', {
			opacity: 0,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -225%',
				end: 'top -255%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slid5', {
			opacity: 1,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -240%',
				end: 'top -270%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slidImg1', {
			opacity: 0,
			left: '0%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top 0%',
				end: 'top -30%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slidImg2', {
			opacity: 1,
			left: '50%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -15%',
				end: 'top -45%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slidImg2', {
			opacity: 0,
			left: '0%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -75%',
				end: 'top -107%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slidImg3', {
			opacity: 1,
			left: '50%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -90%',
				end: 'top -120%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slidImg3', {
			opacity: 0,
			left: '0%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -150%',
				end: 'top -180%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slidImg4', {
			opacity: 1,
			left: '50%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -165%',
				end: 'top -195%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slidImg4', {
			opacity: 0,
			left: '0%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -225%',
				end: 'top -255%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slidImg5', {
			opacity: 1,
			left: '50%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -240%',
				end: 'top -270%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		//* Фон
		/////// 1

		gsap.to('#slideDecor4', {
			x: '-15%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -0%',
				end: 'top -45%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor4', {
			x: '-30%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -90%',
				end: 'top -120%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor4', {
			x: '-45%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -165%',
				end: 'top -195%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor4', {
			x: '-60%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -240%',
				end: 'top -270%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		/////// 2
		gsap.to('#slideDecor3', {
			x: '-7%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -0%',
				end: 'top -45%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor3', {
			x: '-14%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -90%',
				end: 'top -120%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor3', {
			x: '-21%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -165%',
				end: 'top -195%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor3', {
			x: '-28%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -240%',
				end: 'top -270%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		///// 3
		gsap.to('#slideDecor1', {
			x: '10%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -0%',
				end: 'top -45%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor1', {
			x: '20%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -90%',
				end: 'top -120%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor1', {
			x: '30%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -165%',
				end: 'top -195%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor1', {
			x: '40%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -240%',
				end: 'top -270%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		///// 4
		gsap.to('#slideDecor2', {
			x: '7%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -0%',
				end: 'top -45%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor2', {
			x: '14%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -90%',
				end: 'top -120%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor2', {
			x: '21%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -165%',
				end: 'top -195%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#slideDecor2', {
			x: '28%',
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -240%',
				end: 'top -270%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		////////////////////////////////

		gsap.to('#thirdSection', {
			opacity: 0,
			ease: 'power1.inOut',
			scrollTrigger: {
				trigger: '.third-section',
				start: 'top -320%',
				end: 'top -350%',
				scrub: true,
			},
		})

		/* ЧЕТВЕРТАЯ СЕКЦИЯ */

		if (mediaQuery.matches) {
			gsap.to('#scrollBox', {
				padding: '120px 0',
				duration: 1,
				scrollTrigger: {
					trigger: '.fourth-section',
					start: 'top 30%',
					end: 'top 0%',
					scrub: true,
					invalidateOnRefresh: true,
				},
			})
		}

		if (mediaQuery767.matches) {
			gsap.to('#scrollBox', {
				padding: '50px 0 70px',
				duration: 1,
				scrollTrigger: {
					trigger: '.fourth-section',
					start: 'top 30%',
					end: 'top 0%',
					scrub: true,
					invalidateOnRefresh: true,
				},
			})
		}
		gsap.to('#fourthSectionContainer', {
			maxWidth: '100%',
			padding: '0',
			duration: 1,
			scrollTrigger: {
				trigger: '.fourth-section',
				start: 'top 30%',
				end: 'top 0%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#scrollBox', {
			duration: 1,
			scrollTrigger: {
				trigger: '.fourth-section',
				start: 'top 10%',
				end: 'top -20%',
				scrub: true,
				invalidateOnRefresh: true,
			},
			'--scrollBoxAfterBorderRadius': '0px',
			'--scrollBoxAfterFilter': 'blur(0px)',
		})

		

		gsap.to('#header', {
			background: 'none',
			duration: 1,
			scrollTrigger: {
				trigger: '.fourth-section',
				start: 'top 30%',
				end: 'top 0%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#edmanImg', {
			width: '100%',
			duration: 1,
			scrollTrigger: {
				trigger: '.fourth-section',
				start: 'top 20%',
				end: 'top 0%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})

		gsap.to('#scrollBoxTitle', {
			opacity: 1,
			scrollTrigger: {
				trigger: '.fourth-section',
				start: 'top 5%',
				end: 'top -20%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})
		gsap.to('#scrollBoxSubTitle', {
			opacity: 1,
			scrollTrigger: {
				trigger: '.fourth-section',
				start: 'top 5%',
				end: 'top -20%',
				scrub: true,
				invalidateOnRefresh: true,
			},
		})
		
	}

	// Применение анимаций при загрузке страницы
	window.addEventListener('load', applyAnimations)

	// Добавление слушателя для изменений размера экрана
	mediaQuery.addEventListener('change', applyAnimations)
	mediaQuery767.addEventListener('change', applyAnimations)

	/* //! ДЛЯ ВИДЕО В ПЕРВОЙ СЕКЦИИ */
	function canPlayHEVC() {
		var video = document.createElement('video')
		return video.canPlayType('video/mp4; codecs="hvc1"') !== ''
	}

	function canPlayWebM() {
		var video = document.createElement('video')
		return video.canPlayType('video/webm; codecs="vp8, vorbis"') !== ''
	}

	window.onload = function () {
		var videoElement = document.getElementById('edman')

		if (canPlayHEVC()) {
			videoElement.innerHTML =
				'<source src="img/video/edman_lp_nobg_480-hevc-safari.mp4" type="video/mp4">'
		} else if (canPlayWebM()) {
			videoElement.innerHTML =
				'<source src="img/video/edman_lp.webm" type="video/webm">'
		} else {
			videoElement.innerHTML =
				'Ваш браузер не поддерживает элемент <code>video</code>.'
		}

		// Start playing the video
		videoElement.load()
	}
})
