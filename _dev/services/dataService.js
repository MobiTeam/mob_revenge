;(function() {

	angular
		.module('app')
		.factory('$dataService', dataService);

	dataService.$inject = ['$http', '$storage', '$rootScope'];
	
	function dataService($http, $storage, $rootScope) {

		var ROUTES = {
			'userinfo': '/data/userinfo.json'
		}

		return {
			load: load,
			isset: isset
		}

		//////

		function load(querySettings) {

			if(querySettings) {

				if(querySettings.withCache) {


				} else {

					getServerData(querySettings);				

				}


			}
			
		}

		function isset(data) {

			return $storage.get(data);

		}

		function getServerData(querySettings) {

			$http({
				  	method: querySettings.method,
				  	data: angular.toParam(querySettings.data),
				  	url: ROUTES[querySettings.type],
				  	success: querySettings.success()
				});				

		}

	}	


})()