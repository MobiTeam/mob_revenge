;(function() {
	
	angular
		.module('app')
		.directive('headerDir', headerDir);

	function headerDir() {

		function link (scope, element, attrs) {

		}

		return {
			link: link,
			restrict: 'A',
			templateUrl: '/modules/tmpl/app.dir.header.html'
		}

	}	



})()