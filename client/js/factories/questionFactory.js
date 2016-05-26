angular.module('myApp')
myApp.factory('questionFactory', function($http){
	var factory = {}

	factory.showQuestions = function(callback){
		$http.get('/showQuestions').success(function(data){
			callback(data)
		})
	}

	factory.addQuestion = function(info, callback){
		console.log('addQuestion in factory', info)
		$http.post('/addQuestion', info).success(function(data){
			callback(data)
		})
	}

	factory.getQuestion = function(info, callback){
		$http.post('/getQuestion', info).success(function(data){
			callback(data)
		})
	}

	return factory
})