document.addEventListener('DOMContentLoaded', () => {
	const header = document.getElementById('header')
	const logoImg = header.querySelector('img')
	const firstSectionContainer = document.querySelector(
		'.first-section .container'
	)
	const decor1 = document.querySelector('.decor-1')
	const decor2 = document.querySelector('.decor-2')
	const decor3 = document.querySelector('.decor-3')
	const decor4 = document.querySelector('.decor-4')
	const decor5 = document.querySelector('.decor-5')
	const decor6 = document.querySelector('.decor-6')
	const decor7 = document.querySelector('.decor-7')
	const decor07 = document.querySelector('.decor-07')
	const decor8 = document.querySelector('.decor-8')

	gsap.registerPlugin(ScrollTrigger)

	gsap.to(header, {
		height: '130px',
		ease: 'none',
		scrollTrigger: {
			trigger: header,
			start: 'top top',
			end: '+=100',
			scrub: true,
		},
	})

	gsap.to(logoImg, {
		marginTop: '-28px',
		ease: 'none',
		scrollTrigger: {
			trigger: header,
			start: 'top top',
			end: '+=100',
			scrub: true,
		},
	})

	gsap.to(firstSectionContainer, {
		opacity: 0,
		ease: 'none',
		scrollTrigger: {
			start: '1px', // Начало анимации при скролле на 1 пиксель
			end: '400px', // Конец анимации при скролле на 400 пикселей
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

	/// ! Анимации для каждого элемента декора
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
})
