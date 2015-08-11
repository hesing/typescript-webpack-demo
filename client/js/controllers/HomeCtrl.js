module.exports = function(ngModule){
	ngModule.controller('HomeCtrl', function(User){	
		var vm = this;

		vm.users = User;
	});
};
	
