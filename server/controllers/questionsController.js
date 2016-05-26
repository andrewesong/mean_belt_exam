var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var User = mongoose.model('User')

module.exports = {

	show: function(req, res){
		Question.find({}).populate('_user').exec(function(err, questions){
			if(err){
				console.log(err)
			}else{
				res.json(questions)
			}
		})
	},

	add: function(req, res){
		console.log('YO YO YO', req.body.user._id)
		var question = new Question({question: req.body.question, description: req.body.description, _user: req.body.user._id})
		console.log('HELLO', question)
		question.save(function(err){
			if(err){
				console.log(err)
			}else{
				User.findByIdAndUpdate({_id: question._user}, {$push: {questions: question._id}}, function(err, doc){
				})
				res.json(question)
			}
		})
	},

	getQuestion: function(req, res){
		Question.findOne({_id: req.body.id}).populate('_user').exec(function(err,question){
			if(err){
				console.log(err)
			}else{
				res.json(question)
			}
		})
	}
}