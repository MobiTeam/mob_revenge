;(function() {

	angular
		.module('app')
		.controller('settCtrl', settCtrl);

	settCtrl.$inject = ['$scope'];

	function settCtrl ($scope) {

		$scope.$parent.state['title'] = 'Настройки';

	}	


})()