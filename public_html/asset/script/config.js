define({
	app_name: "appName",
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		}
	},
	paths : {
		'App': 'app/application',
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    	'templates': 'app/templates',
		/*libs*/
		'jquery': '../vendor/jquery/jquery',
		'handlebars': '../vendor/handlebars/handlebars',
		'ember': '../vendor/ember/ember',
		/*requirejs-plugins*/
		'text': '../vendor/requirejs-plugins/text',
		'hbs': '../vendor/requirejs-plugins/hbs',
		'domReady': '../vendor/requirejs-plugins/domReady'
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "html"
	}

});

