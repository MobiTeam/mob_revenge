;(function() {

	angular
		.module('app')
		.factory('$dataService', dataService);

	dataService.$inject = ['$http', '$storage'];
	
	function dataService($http, $storage) {

		return {
			load: load
		}

		//////

		function load(what, query, upReqiured) {

			$storage.addData('test', '{"ab" : "123"}', true);

			if(upReqiured) {



			}


		}

	}	


})()