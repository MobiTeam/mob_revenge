;(function() {

	angular
		.module('app')
		.factory('$dataService', dataService);

	dataService.$inject = ['$http', '$storage', '$rootScope'];
	
	function dataService($http, $storage, $rootScope) {

		var CONFIG = {
			'userinfo': {
				url: '/data/userinfo.json',
				method: 'POST',
				cached: false,
				success: function(response) {

					var data = response.data;

					if(data.FIO != "undefined") {

						$storage.setData('userinfo', data);
						$rootScope.$state.go('menu');

					}
				
				}	
			},
			'timetable': {
				url: '',
				cached: true,
				cacheTime: 1000
			},
			'news': {
				url: '',
				cached: true,
				cacheTime: 1000
			},
			'personal': {
				url: '',
				cached: true,
				cacheTime: 1000
			},
			'coffe': {
				url: '',
				cached: true,
				cacheTime: 1000
			},
			'library': {
				url: '',
				cached: true,
				cacheTime: 1000
			},
			'group': {
				url: '',
				cached: true,
				cacheTime: 1000
			},
			'info': {
				url: '',
				cached: false
			} 
		}

		return {
			load: load,
			remove: remove,
			isset: isset
		}

		//////

		function load(query) {

			if(query) {

				if(query.type && CONFIG[query.type]) {

					var queryPar = CONFIG[query.type],
						fromBase = !queryPar.cached;


					if(fromBase) {
						_getDataFromBase(queryPar);
					}					

				}

			}
			
		}

		function isset(data) {
			return !!$storage.getData(data);
		}

		function remove(name) {
			$storage.removeData(name);
		}

		function _getDataFromBase(params) {

			var defaultParam = {
				method: 'GET',
				url: ''
			}

			var callback;

			if (params) {
				angular.extend(defaultParam, params);
				callback = params.success;
			}

			$http(defaultParam).then(callback || _defaultSuccessCallback, _defaultErrorCallback);		

		}

		function _defaultSuccessCallback(response) {

			console.log(response);
		
		}

		function _defaultErrorCallback() {

			console.log('При загрузке данных произошла ошибка.');

		}

	}	


})()