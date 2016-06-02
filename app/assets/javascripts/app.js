var app = angular.module('sampleApp',['ngRoute','ngStorage'])
app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/homepage', {
		templateUrl: 'homepage.html.erb',
		controller: 'homecntrl',
 	})
	.when('/signup', {
		templateUrl: 'signup.html.erb',
		controller: 'applicationCntrl',
 	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false
	});
}]);