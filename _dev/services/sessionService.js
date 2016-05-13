;(function() {
	
	angular
		.module('app')
		.factory('$session', sessionFunction);

	sessionFunction.$inject = ['$dataService', '$rootScope'];
	
	function sessionFunction($dataService, $rootScope) {

		return {
			isEmpty: isEmpty,
			disLogin: disLogin
		}

		/////

		function isEmpty() {

			return !$dataService.isset('userinfo');

		}

		function disLogin() {

			$dataService.remove('userinfo');
			$rootScope.$state.go('auth');

		}

	}	

})()