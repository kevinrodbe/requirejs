/* aun queremos abrir modulos como dependencias, así que no podemos usar el "define" metodo pq entonces este sería un regular modulo. */
require(['task_manager','smokesignals'],function(taskManager,smokesignals){
	'use strict';
	/* como hemos puesto como dependecia al modulo "task_manager", podemos llamar al metodo createTask */
	var aTask=taskManager.createTask('My first task!');
	console.log(smokesignals);
	console.log(aTask);
});
define();
