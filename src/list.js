/* a este modulo que no tiene dependecias, le pasaremos un callback function para definir un metodo */
define(function(){
	'use strict';
	function List(listId){
		this.task=[];
		this.Id=listId;
	}
	List.prototype={};
	List.prototype.constructor=List;

	return List;
});