app.controller('homecntrl', function($scope,$http,$location,$window,$localStorage, $sessionStorage) {
	$scope.initilize = function(){
		console.log("=================");
		console.log($localStorage.user);
		$scope.user = $localStorage.user;
	};
	$scope.homePage = function(){
		$location.path('/')
	}
	$scope.homePath = function(){
 		$location.path('/')
	}

	$scope.initilize();
});