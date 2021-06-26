"use strict"

function start (){
	function menu(){
		const menuItems = document.getElementsByClassName('main-header__item')
		Array.from(menuItems).forEach(e => e.addEventListener('click', (e) => {
			const menuLink = e.target
			if(document.querySelector(menuLink.dataset.goto)){
				const goToBlock = document.querySelector(menuLink.dataset.goto)
				const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset
				const header = document.querySelector('.header')
				if(header.classList.contains('burger-active')){
					document.body.style.overflow = 'scroll';
					header.classList.remove('burger-active')
				}
				window.scrollTo({
					top: goToBlockValue,
					behavior: "smooth"
				})
			}
			if(!e.target.classList.contains('header-menu__item-active')){
				Array.from(menuItems).forEach(e =>  e.classList.remove('header-menu__item-active'))
				e.target.classList.add(('header-menu__item-active'))
			}
		}))
	}
	menu()
}
start()


function burgerMenu(){
	const burger = document.querySelector('.header__icon')
	burger.addEventListener('click',() => {
		const header = document.querySelector('.header')
		if(header.classList.contains('burger-active')){
			document.body.style.overflow = 'scroll';
			header.classList.remove('burger-active')
		}else{
			document.body.style.overflow = 'hidden';
			header.classList.add('burger-active')
		}
	})
}
burgerMenu()

