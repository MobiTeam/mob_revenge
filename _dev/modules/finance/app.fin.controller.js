;(function() {

	angular
		.module('app')
		.controller('finCtrl', finCtrl);

	finCtrl.$inject = ['$scope'];

	function finCtrl ($scope) {

		$scope.$parent.state['title'] = 'Финансовая';

	}	


})()