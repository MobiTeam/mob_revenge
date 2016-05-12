;(function() {

	angular
		.module('app')
		.controller('persCtrl', persCtrl);

	persCtrl.$inject = ['$scope', '$rootScope'];

	function persCtrl ($scope, $rootScope) {

		$scope.$parent.state['title'] = 'Персональная информация';

	}	


})()