module.exports = function(ngModule){
	ngModule.factory('User', function($http){
		return [
			{name: 'hemant', age: 30},
			{name: 'varun', age: 20},
			{name: 'vinay', age: 11},
			{name: 'Arya Singh', age: 5},
			{name: 'Arya 1 Singh', age: 5}

		];
	});
};
	