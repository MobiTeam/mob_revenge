;(function() {

	angular
		.module('app')
		.controller('coffeCtrl', coffeCtrl);

	coffeCtrl.$inject = ['$scope'];

	function coffeCtrl ($scope) {

		$scope.$parent.state['title'] = 'Меню столовой';

	}	


})()