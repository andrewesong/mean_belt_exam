angular.module('myApp')
myApp.controller('newAnswersController', function($location, userFactory, questionFactory, answerFactory, $routeParams){
	var self = this

	var user = userFactory.user()

	questionFactory.getQuestion($routeParams, function(data){
		console.log('so tired', data)
		self.questionInfo = data
	})

	questionFactory.showQuestions(function(data){
		self.questions = data
	})

	this.addAnswer = function(){
		this.newAnswer.id = $routeParams.id
		this.newAnswer.user = user._id
		answerFactory.addAnswer(self.newAnswer, function(data){
			self.answers = data
			self.newAnswer = {}
			$location.url('/dashboard')
		})
	}

	this.cancelAnswer = function(){
		$location.url('/dashboard')
	}

	this.logout = function(){
		userFactory.logout()
		$location.url('/')
	}
})