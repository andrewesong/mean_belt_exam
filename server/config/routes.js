var users = require('../controllers/usersController.js')
var questions = require('../controllers/questionsController.js')
var answers = require('../controllers/answersController.js')

module.exports = function(app){

	app.get('/', function(req, res){
		users.index(req, res)
	})

	//Users Routes
	app.post('/checkUser', function(req, res){
		console.log(req.body)
		users.getUser(req, res)
	})

	app.post('/addUser', function(req, res){
		users.add(req, res)
	})

	app.post('/getUser', function(req, res){
		users.get(req, res)
	})

	//Questions Routes
	app.post('/addQuestion', function(req, res){
		questions.add(req, res)
	})

	app.get('/showQuestions', function(req, res){
		questions.show(req, res)
	})

	app.post('/getQuestion', function(req, res){
		questions.getQuestion(req, res)
	})

	//Answers Routes
	app.post('/addAnswer/:questionId', function(req, res){
		answers.add(req, res)
	})

	app.get('/showAnswers/:questionId', function(req, res){
		answers.show(req, res)
	})

	app.post('/getAnswer', function(req, res){
		answers.getAnswer(req, res)
	})

	app.post('/likeAnswer', function(req, res){
		answers.like(req, res)
	})

}