/* a este modulo que no tiene dependecias, le pasaremos un callback function para definir un metodo */
define(function(){
	'use strict';
	/* constructor para el objeto task */
	function Task(name) {
		this.completed = false;
		this.name = name;
	}
	Task.prototype = {};
	Task.prototype.constructor = Task;

	return Task;
});
/* podemos ponerle un id a este modulo, pero no necesitan, ya que require al momento de lanzar un modulo le asigna su nombre en base a su ubicacion (path) */
/*
define('task',function(){
	...
	....
});
*/
