;(function() {

	angular
		.module('app')
		.controller('finCtrl', authCtrl);

	authCtrl.$inject = ['$scope'];

	function authCtrl ($scope) {

		$scope.$parent.state['title'] = 'Авторизация';

	}	

})()