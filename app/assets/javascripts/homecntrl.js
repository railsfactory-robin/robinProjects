app.controller('homecntrl', function($scope,$http,$location,$window,$localStorage, $sessionStorage) {
	$scope.initilize = function(){
		console.log("=================");
		console.log($localStorage.user);
		$scope.user = $localStorage.user;
	};
	$scope.homePage = function(){
		window.location.href = "/";
	}
	$scope.homePath = function(){
 		window.location.href = "/homepage";
	}

	$scope.initilize();
});