angular.module('myApp')
myApp.controller('dashboardController', function($location, userFactory, questionFactory, $routeParams){
	var self = this

	this.user = userFactory.user()

	questionFactory.getQuestion($routeParams, function(data){
		self.questionInfo = data
	})

	questionFactory.showQuestions(function(data){
		self.questions = data
	})

	this.logout = function(){
		userFactory.logout()
		$location.url('/')
	}
})