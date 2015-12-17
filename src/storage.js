define(function(){
	'use strict';
	function save(list){
		localStorage.setItem(list.id, JSON.stringify(list.tasks));
	}
	function load(listId){
		return JSON.parse(localStorage.getItem(listId));
	}
	function getLists(){
		var x,
			list=[],
			length=localStorage.length;
		for(x=0;x<length;x+=1){
			list.push(localStorage.key(x));
		}
	}
	/* podemos exportar estos metodos retornando un objeto desde el modulo */
	return{
		save:save,
		load:load,
		getLists:getLists
	};
});