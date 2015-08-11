module.exports = (ngModule) => {
	ngModule.directive('helloWorld', function(){
		return{
			template: require('../../views/hello-world.html')
		};
	});
};