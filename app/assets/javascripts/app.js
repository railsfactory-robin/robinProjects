var app = angular.module('sampleApp',['ngRoute','ngStorage'])
app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/index.html.erb',
		controller: 'homecntrl',
 	})
	.when('/homepage', {
		templateUrl: 'templates/homepage.html.erb',
		controller: 'homecntrl',
 	})
	.when('/signup', {
		templateUrl: 'templates/signup.html.erb',
		controller: 'applicationCntrl',
 	})
 	.when('/aboutus', {
		templateUrl: 'templates/aboutus.html.erb',
		controller: 'applicationCntrl',
 	})
 	.when('/contactus', {
		templateUrl: 'templates/contactus.html.erb',
		controller: 'applicationCntrl',
 	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);