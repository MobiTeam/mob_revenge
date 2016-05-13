'use strict';

;(function() {

	angular
		.module('app', ['ui.router', 'ngAnimate'])
		.config(stateConfig)
		.run(copyStates)
		.run(checkAuth);


	////////////////

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
				controller: 'persCtrl',
				data: {
					'accessLogin': true
				}
			})

			.state('finance', {
				url: '/finance',
				templateUrl: '/modules/tmpl/app.view.finance.html',
				controller: 'finCtrl',
				data: {
					'accessLogin': true
				}
			})

			.state('info', {
				url: '/info',
				templateUrl: '/modules/tmpl/app.view.info.html',
				controller: 'infoCtrl'
			})

			.state('settings', {
				url: '/settings',
				templateUrl: '/modules/tmpl/app.view.settings.html',
				controller: 'settCtrl',
				data: {
					'accessLogin': true
				}
			})

			.state('auth', {
				url: '/auth',
				templateUrl: '/modules/tmpl/app.view.auth.html',
				controller: 'authCtrl'
			})

			.state('coffe', {
				url: '/coffe',
				templateUrl: '/modules/tmpl/app.view.coffe.html',
				controller: 'coffeCtrl'
			})

			.state('thres', {
				url: '/thres',
				templateUrl: '/modules/tmpl/app.view.tres.html',
				controller: 'tresCtrl'
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

	//////////////

	copyStates.$inject = ['$rootScope', '$state', '$stateParams'];

	function copyStates($rootScope, $state, $stateParams) {

		$rootScope.$state = $state;
   		$rootScope.$stateParams = $stateParams;
	
	}

	/////////////

	checkAuth.$inject = ['$rootScope', '$session'];

	function checkAuth($rootScope, $session) {

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

			if(toState.data && toState.data.accessLogin) {

				if($session.isEmpty()) {
					event.preventDefault();
				 	$rootScope.$state.go('auth');
				}
			
			}

			// console.log($session.isEmpty());
			// $rootScope.currState.isAuth = !$session.isEmpty();		

		});

	}

})()


	