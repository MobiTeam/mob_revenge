;(function() {

	angular
		.module('app')
		.controller('menuCtrl', menuCtrl);

	menuCtrl.$inject = ['$scope'];

	function menuCtrl ($scope) {

		$scope.$parent.state['title'] = 'Главное меню';

	}	


})()