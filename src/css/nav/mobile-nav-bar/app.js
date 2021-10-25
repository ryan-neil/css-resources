console.log('Hello from the inside...');

const toggleMenu = () => {
	const toggleBtn = document.querySelector('#toggleBtn');
	const navLinks = document.querySelector('#navLinks');

	toggleBtn.addEventListener('click', () => {
		navLinks.classList.toggle('show');
	});
};
toggleMenu();
