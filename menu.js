let menuBtn = document.querySelector('.btn-menu');
let menu = document.querySelector('.nav__menu');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('btn-menu__open');
	menu.classList.toggle('nav-mob__open');
	body.classList.toggle('body-fix');
});

// let fon = document.querySelector('.nav-mob__open');
menu.addEventListener('click', function(event){
	if (event.target == menu) {
		menuBtn.classList.remove('btn-menu__open');
		menu.classList.remove('nav-mob__open');
		body.classList.remove('body-fix');
	}

});
body.addEventListener('click', function(event){
	console.log(event.currentTarget);
	console.log(event.target);
});