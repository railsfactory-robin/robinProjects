app.controller('applicationCntrl', function($scope,$http,$location,$window) {
	/*$scope.initilize = function(){
	$scope.user = {};
	};*/

	$scope.login = function(user){
		$http({
			url: '/home',
			method: 'GET',
			params: user
		}).success(function(data) {
 			console.log("result success")
			console.log(data)
			$scope.user = data;
			window.location.href = "/homepage";
  			/*$location.path('/homepage');*/
       		}).error(function(msg) {
			console.log("result error")
			console.log(msg)
		}); 
	}
});