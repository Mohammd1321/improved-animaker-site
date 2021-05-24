'use strict';

const mainBar = document.querySelector('.mainNav__bars');
const animate = document.querySelectorAll('.state');




mainBar.addEventListener('click',function() {
  animate.forEach(one => {
    one.classList.toggle('activate');
  })
})


