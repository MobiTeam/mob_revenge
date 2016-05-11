;(function() {

	angular
		.module('app')
		.controller('infoCtrl', infoCtrl);

	infoCtrl.$inject = ['$scope'];

	function infoCtrl ($scope) {

		$scope.$parent.state['title'] = 'Справочник';

	}	


})()