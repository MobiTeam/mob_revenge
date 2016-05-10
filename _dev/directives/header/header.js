;(function(){
	
	angular
		.module('app', [])
		.directive('headerDir', headerDir);

	function headerDir() {

		return {
			templateUrl: '/modules/tmpl/app.dir.header.html'
		}

	}	



})()