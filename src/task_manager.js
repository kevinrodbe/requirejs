/* este modulo que SI tiene dependecias */
/* depende del modulo task */
//define(['task'],function(Task){
//	'use strict';
	/* creamos new task usando el constructor del modulo task */
//	function createTask(name){
//		return new Task(name);
//	}

	/* retornar un obj que exposes the createTask metodo */
	/* ahora cualquier module que requiera de task_manager podrás usar el metodo createTask */
//	return{
//		createTask:createTask
//	}
//});

/* otra forma de exportar un metodo es con export */
/* el obj exports es pasado al callback */
define(['task','exports'],function(Task,exports){
	'use strict';
	function createTask(name){
		return new Task(name);
	}

	exports.createTask=createTask;
});


/* cuando son muchas dependencias, usamos CommonJS style para especificar las dependencias */
/* a nuestro callback se le pasa un metodo llamado require, así podemos usarlo para cargar nuestras dependencias */
//define(function(require){
	/* require se asegura que el callback function no será invocado hasta que todas las dependecias hayan sido cargadas y este listas para usarse */
//	var Task=require('task');
//});