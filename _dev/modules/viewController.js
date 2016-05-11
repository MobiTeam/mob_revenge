;(function() {

	angular
		.module('app')
		.controller('viewController', viewController);

	viewController.$inject = ['$scope', '$animate'];

	function viewController ($scope, $animate) {

		$scope.state = {
			'title': '',
			'sidebarIsOpened': false
		}

		$scope.toogleSidebar = toogleSidebar;
		$scope.closeSidebar = closeSidebar;
		$scope.disLogin = disLogin;
		$scope.$on('$stateChangeSuccess', closeSidebar);


		///////

		function toogleSidebar() {

			$scope.state.sidebarIsOpened = !$scope.state.sidebarIsOpened;

		}

		function closeSidebar(event, toState, toParams, fromState, fromParams) {
		    
			$scope.state.sidebarIsOpened = false; 
		    
		}

		function disLogin() {
			if(localStorage && sessionStorage) {
				localStorage.clear();
				sessionStorage.clear();
			}
		}

	}	

})()