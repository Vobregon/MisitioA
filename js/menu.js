let btnMenu = document.getElementById('btnmenu');//creacion de la primera variable
let menu = document.getElementById('menu');//creacion de la segunda variable
btnMenu.addEventListener('click', function(){//cuando le des click
    'use strict';
    menu.classList.toggle('mostrar');
});
