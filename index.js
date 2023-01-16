const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const menuItems = document.getElementById('menu-items')
const modalDimmer = document.getElementById('modal-dimmer')

const toggleMenu = () => {
	menuItems.toggleAttribute('isopen')
	menuItems.toggleAttribute('aria-expanded')
	modalDimmer.toggleAttribute('isopen')
}

menuClose.addEventListener('click', toggleMenu)
menuOpen.addEventListener('click', toggleMenu)
modalDimmer.addEventListener('click', toggleMenu)

// TODO: Keyboard Navigation
