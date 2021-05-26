'use strict';

const mainBar = document.querySelector('.mainNav__bars');
const wrapper = document.querySelector('.wrapper');
const animate = document.querySelectorAll('.state');

window.addEventListener('scroll',function() {
  if(window.scrollY > 70) {
    wrapper.classList.add('active');
  } else {
    wrapper.classList.remove('active');
  }
})




mainBar.addEventListener('click',function() {
  animate.forEach(one => {
    one.classList.toggle('activate');
  })
})


