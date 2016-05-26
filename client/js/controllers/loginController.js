angular.module('myApp')
myApp.controller('loginController', function($location, userFactory){
	var self = this

	this.login = function(){
		userFactory.checkUser(self.user, function(user){
			console.log(self.user)
			if(user){
				$location.url('/dashboard')
			}else{
				userFactory.addUser(self.user, function(user){
					$location.url('/dashboard')
				})
			}
		})
	}
})