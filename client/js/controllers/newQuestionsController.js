angular.module('myApp')
myApp.controller('newQuestionsController', function($location, userFactory, questionFactory){
	var self = this

	this.user = userFactory.user()

	this.addQuestion = function(){
		this.newQuestion.user = this.user
		questionFactory.addQuestion(self.newQuestion, function(data){
			self.questions = data
			self.newQuestion = {}
			$location.url('/dashboard')
		})
	}

	this.cancelQuestion = function(){
		$location.url('/dashboard')
	}

	this.logout = function(){
		userFactory.logout()
		$location.url('/')
	}
})