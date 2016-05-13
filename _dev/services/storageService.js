;(function() {

	angular
		.module('app')
		.factory('$storage', storageFunc);

	storageFunc.$inject = ['$rootScope'];	

	function storageFunc($rootScope) {

		return {
			setData: setData,
			getData: getData,
			removeData: removeData
		}

		/////

	    function getData(name) {

	    	if($rootScope.currState && $rootScope.currState.savePass) {
	    		return localStorage[name];
	    	} else {
	    		return sessionStorage[name];
	    	}

	    }

		function setData(name, data) {

			if(name && data) {

				var timestamp = new Date().getTime(),
					taggetData = { 
						time: timestamp, 
			 			data: data
					};

				if($rootScope.currState && $rootScope.currState.savePass) {
					localStorage[name] = JSON.stringify(taggetData);
				} else {
					sessionStorage[name] = JSON.stringify(taggetData);
				}

			}
		}

		function removeData(name) {

			localStorage.removeItem(name);
			sessionStorage.removeItem(name);

		}

	}	

})()