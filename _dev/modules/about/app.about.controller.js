;(function() {

	angular
		.module('app')
		.controller('aboutCtrl', aboutCtrl);

	aboutCtrl.$inject = ['$scope'];

	function aboutCtrl ($scope) {

		$scope.$parent.state['title'] = 'О приложении';

	}	


})()