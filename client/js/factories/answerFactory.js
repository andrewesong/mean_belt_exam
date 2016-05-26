angular.module('myApp')
myApp.factory('answerFactory', function($http){
	var factory = {}

	factory.showAnswers = function(info, callback){
		$http.get('/showAnswers/' + info.id).success(function(data){
			callback(data)
		})
	}

	factory.addAnswer = function(info, callback){
		console.log('hmmmm', info.id)
		$http.post('/addanswer/' + info.id, info).success(function(data){
			callback(data)
		})
	}

	factory.getAnswer = function(info, callback){
		$http.post('/getAnswer', info).success(function(data){
			callback(data)
		})
	}

	factory.like = function(info, callback){
		$http.post('/likeAnswer', info).success(function(data){
			callback(data)
		})
	}


	return factory
})