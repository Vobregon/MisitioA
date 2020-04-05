var btnMenu = document.getElementById('btnmenu');
var menu = document.getElementById('menu');
btnMenu.addEventListener('click', function () {
	'use strict';
	menu.classlist.toggle('mostrar');
});
