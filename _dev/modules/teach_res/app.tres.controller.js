;(function() {

	angular
		.module('app')
		.controller('tresCtrl', tresCtrl);

	tresCtrl.$inject = ['$scope'];

	function tresCtrl ($scope) {

		$scope.$parent.state['title'] = 'Ресурсы преподавателей';

	}	


})()