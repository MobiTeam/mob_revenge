;(function() {
	
	angular
		.module('app')
		.factory('$session', sessionFunction);

	sessionFunction.$inject = ['$dataService'];
	
	function sessionFunction($dataService) {

		return {
			isEmpty: isEmpty,
			drop: drop
		}

		/////

		function isEmpty() {

			return true;
			//return $dataService.isset('userinfo')) 

		}

		function drop() {

			//$dataService.dropSession();

		}

		function create() {

		}

	}	

})()