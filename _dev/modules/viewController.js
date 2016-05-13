;(function() {

	angular
		.module('app')
		.controller('viewController', viewController);

	viewController.$inject = ['$scope', '$animate', '$rootScope', '$session'];

	function viewController ($scope, $animate, $rootScope, $session) {

		$scope.state = {
			'title': '',
			'sidebarIsOpened': false
		}

		$scope.toogleSidebar = toogleSidebar;
		$scope.closeSidebar = closeSidebar;
		$scope.$on('$stateChangeSuccess', closeSidebar);
		$scope.disLogin = $session.disLogin;
		$scope.isEmpty = $session.isEmpty;


		///////

		function toogleSidebar() {

			$scope.state.sidebarIsOpened = !$scope.state.sidebarIsOpened;

		}

		function closeSidebar(event, toState, toParams, fromState, fromParams) {
		    
			$scope.state.sidebarIsOpened = false; 
		    
		}

		// function disLogin() {

		// 	if(localStorage && sessionStorage) {
		// 		localStorage.clear();
		// 		sessionStorage.clear();
		// 		$rootScope.currState = null;
		// 		$rootScope.$state.go('auth');
		// 	}

		// }

	}	

})()