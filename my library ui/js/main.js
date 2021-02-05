// Кнопка с волной от клика
const button = document.querySelector('button');

button.onclick = function(event){
	let x = event.clientX - event.target.offsetLeft;
	let y = event.clientY - event.target.offsetTop;

	let ripple = document.createElement('span');
	ripple.style.left = x + 'px';
	ripple.style.top = y + 'px';
	this.appendChild(ripple);

	setTimeout(()=>{
		ripple.remove()
	}, 1000);
}
// Бургер для мобильного
var container = document.getElementById('container');
var stick = document.getElementById('stick');

let menuOpen = false;
container.onclick = function(){
	if (!menuOpen){
		stick.classList.add('open');
		menuOpen = true;
	} else{
		stick.classList.remove('open');
		menuOpen = false;
	}
}