var app = angular.module('sampleApp',['ngRoute'])
/*app.config(function($routeProvider,$locationProvider) {
	$routeProvider
        // route for the home page
        .when('/homepage', {
        	templateUrl : 'homepage.html.erb',
        	controller  : 'applicationCntrl'
        }); 
         $locationProvider.html5Mode({
        	enabled: true,
        	requireBase: false
        });
    });
    */
    app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    	$routeProvider
    	.when('/homepage', {
    		templateUrl: 'homepage.html.erb',
    		controller: 'applicationCntrl',
    		reloadOnSearch: false
    	})
    	.otherwise({
    		redirectTo: '/'
    	});
    	$locationProvider.html5Mode({
    		enabled: false,
    		requireBase: false
    	});
    }]);