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
let value =  document.querySelector('.number--js');
const key = new Date().toISOString().slice(0, 10);


if(!localStorage.getItem(key)){
  localStorage.setItem(key, 0)
  value.innerHTML = '0';
} else {
  value.innerHTML = localStorage.getItem(key);
}

addGlass.addEventListener("click", (e) => {
  
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1)
  value.innerHTML = parseInt(value.innerHTML) + 1;
});

deleteGlass.addEventListener("click", (e) => {
  
  const glassValue = parseInt(parseInt(localStorage.getItem(key)) - 1);
    if(glassValue > 0) {
      localStorage.setItem(key, localStorage.getItem(key) - 1)
      value.innerHTML = glassValue - 1;
     };
});
   







