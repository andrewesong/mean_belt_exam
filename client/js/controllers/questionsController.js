angular.module('myApp')
myApp.controller('questionsController', function($location, userFactory, questionFactory, answerFactory, $routeParams){
	var self = this

	var user = userFactory.user()

	answerFactory.showAnswers($routeParams, function(data){
		self.answers = data
	})

	questionFactory.getQuestion($routeParams, function(data){
		self.questionInfo = data
	})

	answerFactory.getAnswer($routeParams, function(data){
		console.log('so tired', data)
		self.answerInfo = data
	})

	questionFactory.showQuestions(function(data){
		self.questions = data
	})

	this.like = function(answerId, questionId, authorId){
		if(authorId != user._id){
			var info = {questionId: questionId, answerId: answerId}
			console.log('%%%%%%', info)
			answerFactory.like(info, function(data){
				self.answers = data
			})
		}
	}

	this.logout = function(){
		userFactory.logout()
		$location.url('/')
	}
})