var myApp = angular.module('myApp', ['ngRoute', 'ngStorage'])

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'static/partials/login.html'
	})
	.when('/dashboard', {
		templateUrl: 'static/partials/dashboard.html'
	})
	.when('/newQuestion', {
		templateUrl: 'static/partials/newQuestion.html'
	})
	.when('/question/:id/newAnswer', {
		templateUrl: 'static/partials/newAnswer.html'
	})
	.when('/question/:id', {
		templateUrl: 'static/partials/question.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})