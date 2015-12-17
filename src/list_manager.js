define(['list','exports'],function(List,exports){
	'use strict';

	function createList(listId){
		return neew List(listId);
	}

	exports.createList=createList;
});