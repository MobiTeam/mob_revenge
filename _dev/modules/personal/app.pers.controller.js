;(function() {

	angular
		.module('app')
		.controller('persCtrl', persCtrl);

	persCtrl.$inject = ['$scope'];

	function persCtrl ($scope) {

		$scope.$parent.state['title'] = 'Персональная информация';

	}	


})()