const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const barOne = document.querySelector('.bar-one');
const barTwo = document.querySelector('.bar-two');
const barThree = document.querySelector('.bar-three');

hamburgerMenu.addEventListener('click', ()=>{
   navList.classList.toggle('open');
   barOne.classList.toggle('change');
   barTwo.classList.toggle('change');
   barThree.classList.toggle('change');
   
});
const value = 'b'

if(value == 'a' || 'b'){
   console.log(value)
}