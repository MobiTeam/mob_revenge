;(function() {

	angular
		.module('app')
		.factory('$storage', storageFunc);

	function storageFunc() {

		return {
			addData: addData
		}

		/////

		function addData(name, jsonStr, toLocal) {

			if(jsonStr) {

				var timestamp = new Date().getTime(),
					json = JSON.parse(jsonStr),
					newObject = {
						time: timestamp, 
						data: json
					}

				if(toLocal) {
					localStorage[name] = JSON.stringify(newObject);
				} else {
					sessionStorage[name] = JSON.stringify(newObject);
				}
			}

		}

	}	


})()

