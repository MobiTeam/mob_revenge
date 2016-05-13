;(function() {

	angular
		.module('app')
		.controller('authCtrl', authCtrl);

	authCtrl.$inject = ['$scope', '$rootScope', '$dataService'];

	function authCtrl ($scope, $rootScope, $dataService) {

		preloadResources();

		$scope.$parent.state['title'] = 'Авторизация';

		$scope.func = {
			tryAuth: tryAuth,
			skipForm: skipForm
		}

		$scope.user = {

		}
		
		$rootScope.currState = {
	        savePass: false
	    }

	    //////////////////

	    function preloadResources() {

	    	var res = [
	    			'/common/img/coffe_hi_icon',
	    			'/common/img/directory_hi_icon',
	    			'/common/img/files-res',
	    			'/common/img/info_hi_icon',
	    			'/common/img/lib_icon',
	    			'/common/img/newspaper_icon',
	    			'/common/img/person_hi_icon',
	    			'/common/img/schedule_icon',
	    			'/common/img/students_group_icon'
	    		];

	    	var retina = window.devicePixelRatio > 1 ? true : false;

	    	for(var i = 0; i < res.length; i++) {

	    		new Image().src = res[i] + (retina ? '@2x' : '') + '.png';

	    	}	

	    	new Image().src = '/modules/tmpl/app.view.menu.html';

	    }

	    function tryAuth(user) {

	    	$dataService.load({ type: 'userinfo', data: user });	    	

	    }

	    function skipForm() {
	    
	    	$rootScope.$state.go("menu");
	    
	    }

	}	

})()