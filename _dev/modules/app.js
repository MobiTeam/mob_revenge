;(function() {

	angular
		.module('app', ['ui.router', 'ngAnimate'])
		.config(stateConfig);

	stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];	

	function stateConfig ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/menu');

		$stateProvider

			// MAIN MENU STATE
		
			.state('menu', {
				url: '/menu',
				templateUrl: '/modules/tmpl/app.view.menu.html',
				controller: 'menuCtrl'
        	})

			.state('timetable', {
				url: '/timetable',
				templateUrl: '/modules/tmpl/app.view.timetable.html',
				controller: 'tmtbCtrl'
			})

			.state('personal', {
				url: '/personal',
				templateUrl: '/modules/tmpl/app.view.personal.html',
				controller: 'persCtrl'
			})

			.state('finance', {
				url: '/finance',
				templateUrl: '/modules/tmpl/app.view.finance.html',
				controller: 'finCtrl'
			})

			.state('info', {
				url: '/info',
				templateUrl: '/modules/tmpl/app.view.info.html',
				controller: 'infoCtrl'
			})

			.state('settings', {
				url: '/settings',
				templateUrl: '/modules/tmpl/app.view.settings.html',
				controller: 'settCtrl'
			})

			.state('auth', {
				url: '/auth',
				templateUrl: '/modules/tmpl/app.view.auth.html',
				controller: 'authCtrl'

			})

			.state('about', {
				url: '/about',
				templateUrl: '/modules/tmpl/app.view.about.html',
				controller: 'aboutCtrl'
			})

			.state('news', {
				url: '/news',
				templateUrl: '/modules/tmpl/app.view.news.html',
				controller: 'newsCtrl'
			});

	}

})()


	