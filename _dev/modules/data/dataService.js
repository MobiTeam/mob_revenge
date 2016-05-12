;(function() {

	angular
		.module('app')
		.factory('$dataService', dataService);

	dataService.$inject = ['$http', '$storage'];
	
	function dataService($http, $storage) {

		var ROUTES = {
			'userinfo': '/data/userinfo.json'
		}

		return {
			load: load
		}

		//////

		function load(querySettings) {

			if(querySettings) {

				if(querySettings.withCache) {


				} else {

					return getServerData(querySettings);				

				}


			}
			
		}

		function getServerData(querySettings) {

			return $http({
				  		method: 'POST',
				  		url: ROUTES[querySettings.type]
					});				

		}

	}	


})()