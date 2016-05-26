var mongoose = require('mongoose')
var Schema = mongoose.Schema
var deepPopulate = require('mongoose-deep-populate')(mongoose)

var UserSchema = new mongoose.Schema({
	name: String,
	questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
})

mongoose.model('User', UserSchema)

var QuestionSchema = new mongoose.Schema({
	question: String,
	description: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

mongoose.model('Question', QuestionSchema)
QuestionSchema.plugin(deepPopulate)

var AnswerSchema = new mongoose.Schema({
	answer: String,
	description: String,
	likes: Number,
	dislikes: Number,
	_user: {type: Schema.Types.ObjectId, ref:'User'},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'}
})
mongoose.model('Answer', AnswerSchema)