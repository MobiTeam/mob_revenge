;(function() {
	
	angular
		.module('app')
		.directive('sidebarDir', sidebarDir);

	function sidebarDir() {

		return {
			templateUrl: '/modules/tmpl/app.dir.sidebar.html'
		}

	}	

})()