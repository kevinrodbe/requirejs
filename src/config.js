require.config({
	baseUrl:'src',
	deps:['main'],
	enforceDefine:true,
	paths:{
		'knockout':'../external/knockout-3.4.0',
		'smokesignals':'../external/smokesignals',
		'text':'../external/text',
		'views':'../views',
		'i18n': '../external/i18n'
	},
	shim:{
		'smokesignals':{
			exports:'smokesignals'
		}
	}
});
define();
