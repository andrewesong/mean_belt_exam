var mongoose = require('mongoose')
var Answer = mongoose.model('Answer')
var Question = mongoose.model('Question')
var User = mongoose.model('User')

module.exports = {

	show: function(req, res){
		Question.findOne({_id: req.params.questionId}).deepPopulate(['answers', 'answers._user']).exec(function(err, answers){
			if(err){
				console.log(err)
			}else{
				res.json(answers)
			}
		})
	},

	add: function(req, res){
		var answer = new Answer({answer: req.body.answer, description: req.body.description, _question: req.body.id, _user: req.body.user, likes: 0, dislikes: 0})
		console.log('ANSWER CONTROLLER', answer)
		answer.save(function(err){
			if(err){
				console.log(err)
			}else{
				Question.findByIdAndUpdate({_id: answer._question}, {$push: {answers: answer._id}}, function(err, doc) {})
				User.findByIdAndUpdate({_id: req.body.user}, {$push: {answers: answer._id}}, function(err, doc) {})
				res.json(answer)
			}
		})
	},

	getAnswer: function(req, res){
		Answer.findOne({_question: req.body.id}).populate('_user').exec(function(err, answer){
			if(err){
				console.log(err)
			}else{
				res.json(answer)
			}
		})
	},

	like: function(req, res){
		console.log("***********************", req.body)
		Answer.findByIdAndUpdate({_id: req.body.answerId}, {$inc: {likes: 1}}, function(err, doc) {
			res.redirect('/showAnswers/' + req.body.questionId)
		})
	}
}