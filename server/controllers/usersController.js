var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {

	index: function(req, res){
		res.render('index.html')
	},

	getUser: function(req, res){
		console.log('hello!!!', req.body)
		User.findOne({name: req.body.name}, function(err, user){
			if(err){
				console.log(err)
			}else{
				res.json(user)
			}
		})
	},

	get: function(req, res){
		User.findOne({_id: req.body.id}, function(err, user){
			if(err){
				console.log(err)
			}else{
				res.json(user)
			}
		})
	},

	add: function(req, res){
		console.log('adding the user', req.body)
		var user = new User({name: req.body.name})
		user.save(function(err){
			if(err){
				console.log("user didnt save")
				console.log(err)
			}else{
				console.log("saved", user)
				res.json(user)
			}
		})
	}
}