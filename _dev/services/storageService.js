;(function() {

	angular
		.module('app')
		.factory('$storage', storageFunc);

	storageFunc.$inject = ['$rootScope'];	

	function storageFunc($rootScope) {

		return {
			setData: setData,
			getData: getData
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

			// if(jsonStr) {

			// 	var timestamp = new Date().getTime(),
			// 		json = JSON.parse(jsonStr),
			// 		newObject = {
			// 			time: timestamp, 
			// 			data: json
			// 		}

			// 	if(toLocal) {
			// 		localStorage[name] = JSON.stringify(newObject);
			// 	} else {
			// 		sessionStorage[name] = JSON.stringify(newObject);
			// 	}
			// }

		}

	}	

})()

