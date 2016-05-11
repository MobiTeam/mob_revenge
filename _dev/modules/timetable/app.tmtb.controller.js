;(function() {

	angular
		.module('app')
		.controller('tmtbCtrl', tmtbCtrl);

	tmtbCtrl.$inject = ['$scope'];

	function tmtbCtrl ($scope) {

		$scope.$parent.state['title'] = 'Расписание занятий';

	}	


})()