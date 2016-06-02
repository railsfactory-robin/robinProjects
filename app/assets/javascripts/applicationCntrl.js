app.controller('applicationCntrl', function($scope,$http,$location,$window,$localStorage, $sessionStorage) {
	$scope.initilize = function(){
 		$scope.loginerror = false;
		
	};	
	$scope.homePage = function(){
 		window.location.href = "/";
	}
	$scope.signupPath = function(){
		window.location.href = "/signup";
	}
	$scope.login = function(user){
		$scope.submitted = true;
  		if ($scope.loginForm.$valid) {
			$http({
				url: '/home',
				method: 'GET',
				params: user
			}).success(function(data) {
				console.log("result success")
				console.log(data.user);
				if (data.user.email) {
 					$scope.user = data.user;
					$localStorage.user = $scope.user;
					window.location.href = "/homepage";
				}else{
 					$scope.loginerror = true;
				}
			}).error(function(msg) {
				console.log("result error")
				console.log(msg)
			});
		}
	};
	$scope.signup = function(user){
		$scope.submitted = true;
  		if (true) {
 			$http({
				url: '/register',
				method: 'POST',
				params: user
			}).success(function(data) {
				console.log("result success")
				console.log(data.user);
				if (data.user.email) {
 					$scope.user = data.user;
					$localStorage.user = $scope.user;
					window.location.href = "/homepage";
				}else{
 					$scope.loginerror = true;
				}
			}).error(function(msg) {
				console.log("result error")
				console.log(msg)
			});
		}
	};

	$scope.initilize();
});