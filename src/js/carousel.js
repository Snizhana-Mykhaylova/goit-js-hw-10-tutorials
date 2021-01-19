import Siema from 'siema';
const mySiema = new Siema();

const nextButtonRef = document.querySelector('.js-next');
const prevButtonRef = document.querySelector('.js-prev');

prevButtonRef.addEventListener('click', () => mySiema.prev());
nextButtonRef.addEventListener('click', () => mySiema.next());
