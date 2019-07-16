"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below




const addGlass = document.querySelector('.button--add');
const deleteGlass = document.querySelector('.button--delete');
let numberGlass =  document.querySelector('.number--js');


numberGlass.innerHTML = 0;



addGlass.addEventListener("click", (e) => {
  e.preventDefault();
  numberGlass.innerHTML++;
  localStorage.setItem('water', numberGlass.innerHTML);
});

if ( localStorage.getItem('water') > 0){

  deleteGlass.addEventListener("click", (e) => {
  e.preventDefault();
  numberGlass.innerHTML--;
  localStorage.setItem('water', numberGlass.innerHTML);
  });
};
  






