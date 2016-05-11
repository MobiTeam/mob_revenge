;(function() {

	angular
		.module('app')
		.controller('newsCtrl', newsCtrl);

	newsCtrl.$inject = ['$scope', '$dataService'];

	function newsCtrl ($scope, $dataService) {

		$scope.$parent.state['title'] = 'Новости';

		$dataService.load();

	}	


})()